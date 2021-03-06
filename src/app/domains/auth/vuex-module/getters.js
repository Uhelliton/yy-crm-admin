export default {
  isLogged: state => {
    return (state.token.length > 60)
  },

  user: state => {
    return state.user || {}
  },

  role: state => {
    return state.user.role || {}
  },

  team: state => {
    return state.user.team || {}
  },

  permissions: state => {
    const permissions = (state.user instanceof Object) ? state.user.role.permissions : {}
    return permissions
  }
}
