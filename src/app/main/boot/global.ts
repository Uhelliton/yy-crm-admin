import Vue from 'vue'
import notify from 'src/app/infra/utils/notify'
import preload from 'src/app/infra/utils/preload'

Vue.prototype.$notify = notify
Vue.prototype.$preload = preload
