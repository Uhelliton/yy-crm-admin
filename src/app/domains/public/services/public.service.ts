import { AxiosHttpAdapter } from 'src/app/main/adapters/axios-http.adapter'
import { PublicCreateDto } from 'src/app/domains/public/dto/public-create.dto'
import { AxiosResponse } from 'src/app/infra/typings/http.type'

class PublicHttpService extends AxiosHttpAdapter {
  protected resource = '/publics'

  public async all(): Promise<AxiosResponse> {
    return await this.get(this.resource)
  }

  public async create(data: PublicCreateDto): Promise<AxiosResponse> {
    return await this.post(this.resource, data)
  }
}

export const PublicService = new PublicHttpService()
