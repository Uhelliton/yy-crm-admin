<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Icon from '../icon/Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class AppDialog extends Vue {
  @Prop({ required: false, type: String }) readonly title: string | undefined
  @Prop({ required: false, type: Boolean }) dialogRef: boolean | undefined
}
</script>

<template>
  <q-dialog
    v-model="dialogRef"
    persistent
    transition-show="scale"
    v-bind="{ ...$attrs }"
    v-on="$listeners">

    <slot v-for="slot in Object.keys($slots)"
          :name="slot"
          :slot="slot" />

    <q-card style="width: 460px; max-width: 80vw;" >
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ title }}</div>
        <Icon icon="x"
              class="font-size-24 cursor-pointer absolute-top-right m-3"
              @click.native="() => dialogRef = false" />
      </q-card-section>
      <q-card-section>
        <slot name="content"></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
