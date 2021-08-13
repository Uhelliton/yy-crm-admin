import http from 'src/app/infra/http'
import qs from 'qs'

export class HttpService {
  protected get (uriPath: string, params: object = {}) : Promise<any> {
    return http.get(uriPath, { params: params }).then(response => response)
  }

  protected post (uriPath: string, data: object, headers: object = {}) : Promise<any> {
    return http.post(uriPath, qs.stringify(data), headers).then(response => response)
  }

  protected put (uriPath: string, data: object) : Promise<any> {
    return http.put(uriPath, qs.stringify(data)).then(response => response)
  }

  protected delete (uriPath: string) : Promise<any> {
    return http.post(uriPath).then(response => response)
  }
}
