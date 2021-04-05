<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppInput, AppSelect } from 'src/components/index'
import { required, min } from 'src/app/support/utils/rules'

@Component({
  components: {
    AppInput,
    AppSelect
  },
  methods: {
    required,
    min
  }
})
export default class EmailCreate extends Vue {
  protected options: string[] = ['Promocional', 'Transacional', 'Institucional']
  protected selected: string = ''
  protected ticked: string[] = []
  protected expanded: string[] = []
  protected simple: Array<object> = [
    {
      label: 'Black Friday 2020',
      children: [
        { label: 'Boletos Pendentes' },
        { label: 'Leads Facebook' }
      ]
    },
    {
      label: 'Black Summer 2020',
      disabled: false,
      children: [
        { label: 'Boletos Pendentes 1' },
        { label: 'Leads Facebook 1' }
      ]
    },
    {
      label: 'Dia do Consumidor 2021',
      children: [
        { label: 'Boletos Pendentes 2' },
        { label: 'Leads Facebook 2' }
      ]
    }
  ]

  protected form: object = {
    folder: '',
    select: ''
  }
}
</script>

<template>
  <q-form ref="form">
    <div class="row">
      <div class="col-4">
        <app-input
          v-model="form.folder"
          label="Nome"
          placeholder="Nome da ação"
          lazy-rules
          :rules="[ required(), min(3) ]"
          for-id="folder" />
      </div>
      <div class="col-4">
        <app-select
          v-model="form.select"
          :options="options"
          label="Nome"
          placeholder="Categoria"
          lazy-rules
          :rules="[ required(), min(3) ]"
          for-id="folder2" />
      </div>
      <div class="col-4">
        <app-input
          v-model="form.folder"
          label="Nome"
          placeholder="Caminho da pasta"
          lazy-rules
          :rules="[ required(), min(3) ]"
          for-id="folder" />
      </div>
    </div>
    <h4 class="card-title">Destinatários</h4>
    <p class="card-title-desc"> <code>Selecione grupos e/ou campanhas desejadas para compor seus destinatários.</code> </p>

    <div class="row">
      <div class="col-6">
        <label>Grupos para enviar</label>
        <q-tree
          class="m-tree"
          :nodes="simple"
          icon="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
          node-key="label"
          tick-strategy="leaf"
          :selected.sync="selected"
          :ticked.sync="ticked"
          :expanded.sync="expanded"
          default-expand-all />
      </div>
      <div class="col-6">
        <label>Grupos para <strong>não</strong> enviar</label>
        <q-tree
          class="m-tree"
          :nodes="simple"
          icon="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
          node-key="label"
          tick-strategy="leaf"
          :selected.sync="selected"
          :ticked.sync="ticked"
          :expanded.sync="expanded"
          default-expand-all />
      </div>
    </div>

    <div class="row  mt-5">
      <div class="col-6">
        <label>Enviar</label>
        <div class="m-tree">
          <table class="table table-nowrap align-mid table-hover mb-0">
            <tbody>
            <tr v-for="(item, index) in simple[0].children" :key="index">
              <td style="width: 50px;"><i class="bx bx-detail"></i></td>
              <td>
                <h5 class="text-truncate font-size-14 mb-1">{{  item.label }} </h5>
              </td>
              <td style="width: 90px;">
                <div>
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item"><a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a></li>
                  </ul>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-6">
        <label>Não enviar</label>
        <div class="m-tree">
          <table class="table table-nowrap align-mid table-hover mb-0">
            <tbody>
            <tr v-for="(item, index) in simple[2].children" :key="index">
              <td style="width: 50px;"><i class="bx bx-detail"></i></td>
              <td>
                <h5 class="text-truncate font-size-14 mb-1">{{  item.label }} </h5>
              </td>
              <td style="width: 90px;">
                <div>
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item"><a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a></li>
                  </ul>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </q-form>
</template>

<style lang="scss">
.m-tree {
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 4px;
  vertical-align: top;
  padding: 20px;
}

.q-stepper {
  box-shadow: none;
  border-radius: 0;
}

.q-tree__node {
  margin-left: 20px;
  &-header-content {
    margin-left: 20px;
  }

  .q-tree__node-header {
    .q-tree__arrow  {
      margin-right: 15px!important;
      right: 4px;
    }

    &:before {
      content: '';
      position: absolute;
      top: -3px;
      bottom: 50%;
      width: 35px;
      left: -42px;
      border-left: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
    }
  }

  :after {
    left: -32px!important;
  }
}
</style>
