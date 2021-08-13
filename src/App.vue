<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import Admin from 'src/app/presentation/components/layouts/Admin'
import Login from 'src/app/presentation/components/layouts/Login'
import { Route } from 'vue-router'

@Component({
  components: { Admin, Login }
})
export default class App extends Vue {
  public layout: string = this.$route.meta.layout || 'admin'

  public handleRouteUpdate (route: Route): void {
    this.layout = route.meta.layout || 'admin'
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouteChange (route: Route) {
    this.handleRouteUpdate(route)
  }
}
</script>

<template>
  <div id="q-app">
    <admin v-if="$route.meta.layout !== 'login'"></admin>
    <login v-if="$route.meta.layout === 'login'"></login>
  </div>
</template>

<style lang="scss"></style>
