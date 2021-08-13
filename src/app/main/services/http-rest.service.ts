import { HttpService } from 'src/app/main/services/http.service'

export class HttpRestService extends HttpService {
  protected resource: string = ''
  protected fieldId: string = 'id'

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  public create (record: object) {
    return this.post(`${this.resource}`, record)
  }

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  public update (record: object) {
    return this.put(`${this.resource}/${this.getId(record)}`, record)
  }

  /**
   * @param {String|Object} record
   * @returns {Promise}
   */
  public show (record: object|string) {
    return this.get(`${this.resource}/${this.getId(record)}`)
  }

  /**
   * @param {String|Object} record
   * @returns {Promise}
   */
  destroy (record: object|string) {
    return this.delete(`${this.resource}/${this.getId(record)}`)
  }

  /**
   * @param {File} file
   * @param {Function} onUploadProgress
   * @returns {Promise}
   */
  public upload (file: File, onUploadProgress: Function) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    return this.post('/upload-file', file, { headers, onUploadProgress })
  }

  /**
   * @param {String|Object} record
   * @returns {string}
   */
  private getId (record: any|string) {
    if (typeof record === 'object') {
      return record[this.fieldId]
    }
    return String(record)
  }

  /**
   * @param {Object} params
   * @returns {Promise}
   */
  public all (params: object = {}) {
    return this.get(this.resource, params)
  }
}
