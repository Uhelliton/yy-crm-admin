import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as newsletter } from './newsletter'

export default [
  ...auth,
  ...dashboard,
  ...newsletter
]
