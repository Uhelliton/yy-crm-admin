<script>
export default {
  name: 'Login',
  computed: {
    backgroundImage () {
      return process.env.BUCKET_URL + '/bg/bg-3.jpg'
    }
  }
}
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link tag="a" to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <!--<slot />-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
