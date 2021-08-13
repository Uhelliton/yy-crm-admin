<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AppIcon extends Vue {
  @Prop({ required: false, type: String }) readonly title: string | undefined
  @Prop({ required: true, type: String }) readonly icon: string | undefined
}
</script>

<template>
  <i v-if="icon.includes('flaticon')" :class="icon"></i>
  <i v-else :class="'bx bx-' + icon"></i>
</template>
