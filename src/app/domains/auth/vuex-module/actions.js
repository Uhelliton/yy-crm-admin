import AuthService from '../services/auth-service'
import UserStorage from '../storage/index'
export default {
  /*!
   * Responsavel para efetivar a autenticacao de um usuario
   * @param context
   * @param payload
   *
   * @returns Promise
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attemptLogin ({ commit, dispatch }, payload) {
    return AuthService.authenticate(payload)
      .then(response => {
        commit('CHANGE_USER', response.user)
        commit('CHANGE_TOKEN', response.token)
        UserStorage.store(response)
        return response
      })
      .catch(error => {
        return error.response
      })
  },

  /*!
   * Responsavel para deslogar um usuário
   * @param commit
   * @param dispatch
   * @param payload
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout ({ commit, dispatch }, payload) {
    commit('CLEAR_USER_SESSION', [])
    UserStorage.clearSession()
    return true
  }
}
