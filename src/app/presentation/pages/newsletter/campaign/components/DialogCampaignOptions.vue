<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { AppDialog, AppIcon } from 'src/app/presentation/components'
import { find } from 'src/app/infra/collections/index'

@Component({
  components: {
    AppDialog,
    AppIcon
  }
})
export default class DialogCampaignOptions extends Vue {
  protected dialogRef: boolean = false

  @Watch('dialogToken')
  dialogTokenChanged () {
    this.dialogRef = true
  }

  @Prop({ required: false, type: String }) readonly dialogToken!: string
  @Prop({ required: true, type: Object }) readonly node!: object

  public menuOptions: Array<object> = [
    {
      id: 1,
      name: 'Nova pasta',
      icon: 'flaticon-folder-1'
    },
    {
      id: 2,
      name: 'Nova ação de e-mail',
      icon: 'flaticon-envelope'
    },
    {
      id: 3,
      name: 'Novo teste A/B',
      icon: 'flaticon-background'
    }
  ]

  protected onListenerDialogClose () {
    this.dialogRef = false
    this.$emit('close', true)
  }

  protected onSelectOption (menuId: number) {
    this.dialogRef = false
    this.$emit('select', find(this.menuOptions, { id: menuId }))
  }
}
</script>

<template>
  <app-dialog
    :dialog-ref="dialogRef"
    position="top"
    @hide="onListenerDialogClose"
    title="Adicionar em">
    <template #content>
      <div class="page-title-right">
        <ol class="breadcrumb m-0" style="background: none">
          <li class="breadcrumb-item">
            <app-icon icon="flaticon-folder-1" />
          </li>
          <li class="breadcrumb-item active">
            <span aria-current="location">{{  node.name }}</span>
          </li>
        </ol>
      </div>

      <div
        class="card border shadow-none mb-2 mt-2"
        v-for="option in menuOptions"
        :key="option.id">
        <a href="javascript: void(0);" class="text-body" @click="onSelectOption(option.id)">
          <div class="p-2">
            <div class="d-flex">
              <div class="avatar-xs align-self-center me-2">
                <div class="avatar-title rounded bg-transparent text-success font-size-20">
                  <app-icon :icon="option.icon" class="m-icon--sm" />
                </div>
              </div>
              <div class="overflow-hidden me-auto">
                <h5 class="font-size-13 text-truncate mt-2">{{ option.name }}</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
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
