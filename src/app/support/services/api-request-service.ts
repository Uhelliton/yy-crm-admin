import http from 'src/app/support/http/index'
// @ts-ignore
import qs from 'qs'

const ApiRequestService = {
  /*!
   * Responsavel para gerar nova request para o servidor do tipo get
   * @param uriPath
   */
  get: (uriPath: string) => {
    return http.get(uriPath)
      .then(response => response.data)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo post
   * @param {string} uriPath
   * @param {array} $data
   * @return {Promise}
   */
  post: (uriPath: string, data: object, headers: object) => {
    return http.post(uriPath, qs.stringify(data), headers)
      .then(response => response.data)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo put
   * @param {string} uriPath
   * @param {array} $data
   * @return {Promise}
   */
  put: (uriPath: string, data: object) => {
    return http.put(uriPath, qs.stringify(data))
      .then(response => response.data)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo delete
   * @param {string} uriPath
   * param {array} data
   * @return {Promise}
   */
  delete: (uriPath: string, data: object) => {
    return http.delete(uriPath, { data: data })
      .then(response => response.data)
  }

}

export default ApiRequestService
