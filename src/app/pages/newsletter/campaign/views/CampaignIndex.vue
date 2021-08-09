<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
import DialogCampaignOptions from '../components/DialogCampaignOptions'
import DialogNewFolder from '../components/DialogNewFolder'
import { AppIcon, AppCard } from 'src/components/index'
import { uid } from 'src/app/support/utils/helpers'
import { find } from 'src/app/support/utils/collection'

@Component({
  components: {
    VueTreeList,
    AppIcon,
    AppCard,
    DialogCampaignOptions,
    DialogNewFolder
  }
})
export default class CampaignIndex extends Vue {
  public token: object = { folderCreate: '', campaignActions: '' }
  protected nodesChecked: Array<object> = []
  protected nodeSelected: object = {}
  public data: any = new Tree([
    {
      name: 'Semana Fidelidade',
      id: 1,
      pid: 0,
      dragDisabled: true,
      addTreeNodeDisabled: false,
      addLeafNodeDisabled: true,
      editNodeDisabled: true,
      delNodeDisabled: true,
      children: [
        {
          name: 'emana Fidelidade 01',
          id: 2,
          isLeaf: false,
          pid: 1,
          children: [
            {
              name: 'Email Fidelidade 01',
              id: 22,
              isLeaf: true,
              pid: 1
            },
            {
              name: 'Email Fidelidade 01',
              id: 22,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: 'emana Fidelidade 02',
          id: 3,
          isLeaf: false,
          pid: 1
        },
        {
          name: 'emana Fidelidade 03',
          id: 4,
          isLeaf: false,
          pid: 1
        }
      ]
    },
    {
      name: 'Black Friday',
      id: 1,
      pid: 0,
      dragDisabled: true,
      addTreeNodeDisabled: false,
      addLeafNodeDisabled: true,
      editNodeDisabled: true,
      delNodeDisabled: true,
      children: [
        {
          name: 'Black Friday 01',
          id: 23,
          isLeaf: false,
          pid: 1,
          children: [
            {
              name: 'Black Friday 02',
              id: 223,
              isLeaf: true,
              pid: 1
            },
            {
              name: 'Black Friday 03',
              id: 223,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: 'Black Friday 02',
          id: 33,
          isLeaf: false,
          pid: 1
        },
        {
          name: 'Black Friday 03',
          id: 43,
          isLeaf: false,
          pid: 1
        }
      ]
    },
    {
      name: 'Black Summer',
      id: 1,
      pid: 0,
      dragDisabled: true,
      addTreeNodeDisabled: false,
      addLeafNodeDisabled: true,
      editNodeDisabled: true,
      delNodeDisabled: true,
      children: [
        {
          name: 'Black Summer 01',
          id: 23,
          isLeaf: false,
          pid: 1,
          children: [
            {
              name: 'Black Summer 02',
              id: 223,
              isLeaf: true,
              pid: 1
            },
            {
              name: 'Black Summer 03',
              id: 223,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: 'Black Summer 02',
          id: 33,
          isLeaf: false,
          pid: 1
        },
        {
          name: 'Black Summer 03',
          id: 43,
          isLeaf: false,
          pid: 1
        }
      ]
    }
  ])

  onClick (node: object) {
    const nodeChecked = find(this.nodesChecked, { id: node.id })
    if (nodeChecked) {
      this.nodesChecked = this.nodesChecked.filter(item => item.id !== nodeChecked.id)
      return false
    }

    this.nodesChecked.push(node)
  }

  addNode () {
    this.token.folderCreate = uid()
    this.nodeSelected = {}
  }

  editNode () {
    this.nodeSelected = this.nodesChecked.shift()
    this.token.folderCreate = uid()
  }

  protected handleCampaignOption (node: any) {
    this.token.campaignActions = uid()
    this.nodeSelected = node
  }

  protected handleTreeNodeClick (nodeId: number) {
    console.log(nodeId)
  }

  protected onListenerFolderCreate ({ form, node }) {
    const nodeItem = new TreeNode({ name: form.folder, isLeaf: false })

    if (node && Object.prototype.hasOwnProperty.call(node, 'name')) {
      const children = find(this.data.children, { id: node.id })
      children.addChildren(nodeItem)
    } else {
      this.data.addChildren(nodeItem)
    }
  }

  protected onListenerSelectedOption (action: object) {
    switch (action.id) {
      case 1:
        this.token.folderCreate = uid()
        break
      case 2:
        this.$router.push({ name: 'email.create', params: { campaignId: this.nodeSelected.id } })
        break
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-2">
      <div class="card m-newsletter__sidebar">
        <div class="m-newsletter__head">
          <h4> sua seleção contém <br> 3 <br> envios</h4>
        </div>
        <div class="m-newsletter__body">
          <div class="row justify-center">
            <button @click="editNode" v-if="(nodesChecked && nodesChecked.length === 1)" class="btn btn-primary px-5">
              <i class="bx bx-plus font-size-16 mr-1"></i> Renomear
            </button>
            <button @click="editNode" v-if="(nodesChecked && nodesChecked.length === 1)" class="btn btn-primary px-5 mt-4">
              <i class="bx bx-plus font-size-16 mr-1"></i> Fazer cópia
            </button>
            <button @click="editNode" v-if="(nodesChecked && nodesChecked.length === 1)" class="btn btn-primary px-5 mt-4">
              <i class="bx bx-plus font-size-16 mr-1"></i> Deletar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-10">
      <app-card title="Listagem de Campanhas">
        <template #content>
          <vue-tree-list
            class="m-tree__list"
            :model="data"
            default-tree-node-name="Nova Campanha"
            default-leaf-node-name="Novo Email"
            v-bind:default-expanded="false">
              <template v-slot:leafNameDisplay="slotProps">
                <span>
                  <input
                    type="checkbox"
                    :checked="nodesChecked.find((item) => item.id === slotProps.model.id)"
                    :id="slotProps.model.id"
                    @click.prevent="onClick(slotProps.model)" />
                  <label :for="slotProps.model.id" class="ml-1" @click.prevent="onClick(slotProps.model)">{{ slotProps.model.name }}</label>
                  <span hidden>#{{ slotProps.model.id }}</span>
                </span>
              </template>
              <template v-slot:addTreeNodeIcon="slotProps">
                <span title="Opções"  @click.stop.prevent="handleCampaignOption(slotProps.model)">
                   <app-icon icon="flaticon-add"  />
                </span>
              </template>

              <span class="icon" slot="addLeafNodeIcon" hidden>＋</span>
              <span class="icon" slot="editNodeIcon" hidden></span>
              <span class="icon" slot="delNodeIcon" hidden></span>
              <span class="icon" slot="leafNodeIcon">
                <app-icon icon="flaticon-envelope" class="m-icon--sm mr-2" />
              </span>
              <span class="icon" slot="treeNodeIcon" >
                  <app-icon icon="flaticon-folder-1 mr-2" class="m-icon--sm" />
              </span>
          </vue-tree-list>
          <button @click="addNode" class="btn btn-default-primary mb-2 mr-2">
            <i class="bx bx-plus font-size-16 mr-1"></i> Criar nova pasta
          </button>
        </template>
      </app-card>
    </div>
    <dialog-campaign-options
      :dialog-token="token.campaignActions"
      :node="nodeSelected"
      @select="onListenerSelectedOption"/>

    <dialog-new-folder
      :dialog-token="token.folderCreate"
      :node="nodeSelected"
      @submit="onListenerFolderCreate"  />
  </div>
</template>

<style lang="scss">
.m-newsletter {
  &__sidebar {
    background-color: #fff;
    width: 250px;
    position: fixed;
    top: 50px;
    left: 0;
    height: calc(100% - 50px);
    overflow: auto;
  }

  &__head {
    position: relative;
    background-color: #466af0;
    color: #fff;
    min-height: 200px;
    padding-top: 100px;
    text-align: center;

    * {
      color: #fff;
    }
  }
  &__body {
    padding-top: 20px;
  }
}

.vtl {
  .vtl-tree-node {
    border-top: 1px solid #ebedf3;
    padding: 9px 0;
    position: relative;
    &:hover {
      -webkit-transition: top .3s ease;
      transition: top .3s ease;
      z-index: 95;
      -webkit-box-shadow: 0 10px 30px 0 rgba(82,63,105,.08);
      box-shadow: 0 10px 30px 0 rgba(82,63,105,.08);
      background-color: #fff;
    }

    .vtl-node-main {
      background: none;
    }
  }

  .vtl-icon-caret-down,.vtl-icon-caret-right {
    font-size: 16px;
    margin-right: 5px;
  }

  .icon {
    &:hover {
      cursor: pointer;
    }
  }
}

.q-checkbox__bg {
  border: 1px solid currentColor;
  border-radius: 2px;
}

</style>
