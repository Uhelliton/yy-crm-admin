<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop({ required: false, type: String }) readonly title: string | undefined
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-3">{{ title }}</h4>
      <slot name="content"></slot>
    </div>
  </div>
</template>
