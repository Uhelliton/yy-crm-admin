import { CampaignService } from 'src/app/domains/campaign/services/campaign.service'
import { map } from 'src/app/infra/plugins/collections'
import { ITreeModel, ITreeChildren } from 'src/app/domains/campaign/models/tree.model'
import { CampaignModel } from 'src/app/domains/campaign/models/campaign.model'

class ConvertModelToTreeFormatUseCase {

  public async execute(): Promise<ITreeModel[]> {
    const campaigns: CampaignModel[] = await CampaignService.all()

    return map(campaigns, (campaign: CampaignModel|any) => {
      return {
        id: campaign.id,
        pid: campaign.id,
        name: campaign.name,
        dragDisabled: true,
        addTreeNodeDisabled: false,
        addLeafNodeDisabled: true,
        editNodeDisabled: true,
        delNodeDisabled: true,
        children: map(campaign.children, (children: ITreeChildren) => {
          return {
            name: children.name,
            id: children.id,
            isLeaf: true,
            pid: campaign.id
          }
        })
      }
    })
  }
}

export const ConvertModelToTreeFormat = new ConvertModelToTreeFormatUseCase().execute()
