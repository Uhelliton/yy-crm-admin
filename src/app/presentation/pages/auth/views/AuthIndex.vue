<script>
import FormLogin from '../components/FormLogin'
export default {
  name: 'AuthIndex',
  components: {
    FormLogin
  },
  data () {
    return {
      logoPath: process.env.BUCKET_URL + '/img/logos/'
    }
  }
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card overflow-hidden">
        <div class="bg-soft-primary">
          <div class="row">
            <div class="col-7">
              <div class="text-primary p-4">
                <h5 class="text-primary">Bem vindo de volta !</h5>
                <p>Faça login para continuar.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body pt-0">
          <div>
            <router-link tag="a" to="/" />
          </div>
          <FormLogin />
        </div>
      </div>

    </div>
  </div>
</template>
