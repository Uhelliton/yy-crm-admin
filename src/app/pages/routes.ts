import { routes as auth } from './auth/index'
import { routes as dashboard } from './panel/dashboard/index'
import { routes as newsletter } from './newsletter/index'

export default [
  ...auth,
  ...dashboard,
  ...newsletter
]
