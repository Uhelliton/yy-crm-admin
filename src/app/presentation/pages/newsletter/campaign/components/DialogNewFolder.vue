<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { AppDialog, AppIcon, AppInput, AppButton } from 'src/app/presentation/components'
import { required, min } from 'src/app/infra/utils/rules'

@Component({
  components: {
    AppButton,
    AppInput,
    AppDialog,
    AppIcon
  },
  methods: {
    required,
    min
  }
})
export default class DialogNewFolder extends Vue {
  protected dialogRef: boolean = false
  protected form: any = {
    folder: ''
  }

  @Watch('dialogToken')
  dialogTokenChanged () {
    this.dialogRef = true

    if (('name' in this.node)) {
      this.form.folder = this.node.name
    }
  }

  @Prop({ required: false, type: String }) readonly dialogToken!: string
  @Prop({ required: false, type: Object, default: {} }) readonly node!: object|any

  protected onListenerDialogClose () {
    this.dialogRef = false
    this.$emit('close', true)
  }

  protected handleFormSubmit () {
    const form: any = this.$refs.form
    form.validate().then(async (success: boolean) => {
      if (success) {
        this.$emit('submit', { form: this.form, node: this.node })
        this.form.folder = ''
        this.dialogRef = false
      }
    })
  }
}
</script>

<template>
  <app-dialog
    :dialog-ref="dialogRef"
    position="top"
    @hide="onListenerDialogClose"
    title="Nova Pasta">
    <template #content>
      <div class="page-title-right" v-if="('name' in node)">
        <ol class="breadcrumb m-0" style="background: none">
          <li class="breadcrumb-item">
            <app-icon icon="flaticon-folder-1" />
          </li>
          <li class="breadcrumb-item active">
            <span aria-current="location">{{ node.name }}</span>
          </li>
        </ol>
      </div>
      <q-form ref="form" @submit="handleFormSubmit">
        <div class="container">
          <app-input
            v-model="form.folder"
            label="Nome"
            placeholder="Nome da nova pasta"
            lazy-rules
            :rules="[ required(), min(3) ]"
            for-id="folder" />
          <app-button class="mt-4" type="submit" label="Criar" />
        </div>
      </q-form>
    </template>
  </app-dialog>
</template>

<style lang="scss">

.q-dialog {
  .fixed-top {
    position: fixed;
    top: 4%;
    right: 0;
    left: 0;
    z-index: 1030;
  }
}
</style>
