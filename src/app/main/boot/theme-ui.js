import BootstrapVue from 'bootstrap-vue'
import vco from 'v-click-outside'
import 'src/app/presentation/styles/app/theme/scss/index.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app, router, Vue }) => {
  Vue.use(BootstrapVue)
  Vue.use(vco)
}
