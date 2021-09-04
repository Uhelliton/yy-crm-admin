import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as newsletter } from './newsletter'
import { routes as publicContact } from './public'

export default [
  ...auth,
  ...dashboard,
  ...newsletter,
  ...publicContact
]
