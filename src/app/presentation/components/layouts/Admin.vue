<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import HorizontalTopbar from 'src/app/presentation/components/layouts/HorizontalTopbar.vue'
import HorizontalNav from 'src/app/presentation/components/layouts/HorizontalNav.vue'
import Footer from 'src/app/presentation/components/layouts/Footer.vue'
import PageHeader from './PageHeader.vue'

@Component({
  components: {
    HorizontalTopbar,
    HorizontalNav,
    Footer,
    PageHeader
  }
})
export default class Admin extends Vue {
  created () {
    document.body.setAttribute('data-layout', 'horizontal')
    document.body.setAttribute('data-topbar', 'light')
    document.body.removeAttribute('data-sidebar')
    document.body.removeAttribute('data-layout-size')
  }

  public toggleRightSidebar () {
    document.body.classList.toggle('right-bar-enabled')
  }

  public hideRightSidebar () {
    document.body.classList.remove('right-bar-enabled')
  }
}
</script>

<template>
  <div>
    <div layout="horizontal">
      <div id='layout-wrapper'>
        <HorizontalTopbar />
        <HorizontalNav />
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class='main-content'>
          <div class='page-content'>
            <div class='container-fluid'>
              <page-header></page-header>
              <div id='q-app'>
                <transition name=''>
                  <router-view />
                </transition>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
</style>
