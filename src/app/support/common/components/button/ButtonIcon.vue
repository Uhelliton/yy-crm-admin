<script lang="ts">
import {Component, Prop,  Vue } from 'vue-property-decorator'
import { BgColor, Size } from './button.types'

@Component
export default class ButtonIcon extends Vue {
  @Prop({ required: true, type: String }) readonly title: string | undefined
  @Prop({ required: true, type: String }) readonly icon: string | undefined
  @Prop({ required: false, type: String, default: BgColor.dark }) readonly bgColor: BgColor | undefined
  @Prop({ required: false, type: String, default: Size.sm }) readonly size: Size | undefined

  get hasIcon(): boolean {
    return (typeof this.icon !== "undefined")
  }

  callback (event: any) {
    this.$emit('click', event);
  }
}
</script>

<template>
  <button
    type="button"
    class="btn btn-icon mr-2"
    @click="callback($event)"
    :title="title"
    :class="[bgColor, size]">
    <i class="la" :class="icon"></i>
  </button>
</template>
