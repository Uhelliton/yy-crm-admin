<script>
import { mapActions } from 'vuex'
import AppInput from 'src/app/presentation/components/form/AppInput'

export default {
  components: { AppInput },
  data () {
    return {
      form: {
        email: 'email@teste.com',
        password: 'crm'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['attemptLogin']),
    onAuthenticate () {
      this.$refs.form.validate().then(async (valid) => {
        if (valid) {
          this.$preload.show()

          this.attemptLogin({ ...this.form })
            .then(response => {
              this.$preload.hide()

              if (Object.keys(response).includes('token')) {
                this.$router.push({ name: 'dashboard.index' })
              } else {
                this.$notify.warning('Ops! Error ao logar')
              }
            })
            .catch(error => {
              this.$notify.error(error)
            })
        }
      })
    }
  }
}
</script>

<template>
  <q-form autocomplete="off"
          @submit="onAuthenticate"
          class="p-2"
          ref="form">
    <app-input for-id="1"
               label="email"
               placeholder="seunome@email.com"
               v-model="form.email"
               :rules="[ val => val && val.length > 0 || 'Por favor digite algo']">
    </app-input>

    <app-input for-id="1"
               label="password"
               placeholder="******"
               type="password"
               v-model="form.password"
               :rules="[val => val !== null && val !== '' || 'Por favor digite algo']">
    </app-input>

    <div class="p-1">
      <b-button
        type="submit"
        variant="primary"
        class="btn-block"
      > Logar no sistema
      </b-button>

      <div class="mt-4 text-center">
        <router-link tag="a" to="/" class="text-muted">
          <i class="mdi mdi-lock mr-1"></i> Esqueceu a senha?
        </router-link>
      </div>
    </div>
  </q-form>
</template>
