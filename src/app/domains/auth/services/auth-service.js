import ApiRequestService from 'src/app/support/services/api-request-service'

const endpoint = '/auth/login'

const AuthService = {
  /*!
   * Autenticação de usuários
   *
   * @param {Object} data
   * @returns {Promise}
   */
  authenticate: (data) => {
    return ApiRequestService.post(endpoint, data)
  }
}

export default AuthService
