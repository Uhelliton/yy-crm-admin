import store from 'src/app/domains/auth/vuex-module'
// const isAuthRoute = route => route.path === '/'
const isLogged = () => (store.state.token.length > 60)
/*!
 * Verificacao antes de inicializar as rotas
 *
 * @param to
 * @param from
 * @param next
 */
export default (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isLogged()) {
    next({ name: 'index' })
  } else if (!requiresAuth && isLogged()) {
    next('/dashboard')
  } else {
    next()
  }
}
