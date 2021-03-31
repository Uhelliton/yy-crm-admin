import { routes as auth } from './auth/index'
import { routes as dashboard } from './panel/dashboard/index'
export default [
  ...auth,
  ...dashboard
]
