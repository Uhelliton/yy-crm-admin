import { routes as auth } from './auth'
import { routes as dashboard } from './panel/dashboard'
import { routes as newsletter } from './newsletter'

export default [
  ...auth,
  ...dashboard,
  ...newsletter
]
