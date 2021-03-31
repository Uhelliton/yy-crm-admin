<script lang="ts">
import {Component, Prop,  Vue } from 'vue-property-decorator'

@Component
export default class LinkButton extends Vue {
  @Prop({ required: true, type: String }) readonly linkTitle: string | undefined
  @Prop({ required: false, type: String }) readonly icon: string | undefined
  @Prop({ required: false, type: String, default: 'btn-brand' }) readonly bgColor: string | undefined
  @Prop({ required: false, type: String, default: 'btn-md' }) readonly size: string | undefined

  get hasIcon(): boolean {
    return (typeof this.icon !== "undefined")
  }
}
</script>

<template>
  <a
    href="#"
    class="btn btn-elevate btn-icon-sm"
    :title="linkTitle"
    :class="[bgColor, size]">
    <i class="la" :class="icon" v-if="hasIcon"></i>
    {{ linkTitle }}
  </a>
</template>
