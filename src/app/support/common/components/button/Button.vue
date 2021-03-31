<script lang="ts">
import {Component, Prop,  Vue } from 'vue-property-decorator'
import { BgColor, Size } from './button.types'

@Component
export default class Button extends Vue {
  @Prop({ required: true, type: String }) readonly title: string | undefined
  @Prop({ required: false, type: String }) readonly icon: string | undefined
  @Prop({ required: false, type: String, default: BgColor.brand }) readonly bgColor: string | undefined
  @Prop({ required: false, type: String, default: Size.md }) readonly size: string | undefined

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
    class="btn btn-elevate btn-icon-sm"
    @click="callback($event)"
    :title="title"
    :class="[bgColor, size]">
    <i class="la" :class="icon" v-if="hasIcon"></i>
    {{ title }}
  </button>
</template>
