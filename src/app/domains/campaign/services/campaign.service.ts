import { AxiosHttpAdapter } from 'src/app/main/adapters/axios-http.adapter'
import { CampaignModel } from 'src/app/domains/campaign/models/campaign.model'

class HttpCampaignService extends AxiosHttpAdapter {
  protected resource = '/campaigns'

  public async all(): Promise<CampaignModel[]> {
    const response = await this.get(this.resource)
    const { data } = response
    return data
  }
}

export const CampaignService = new HttpCampaignService()
