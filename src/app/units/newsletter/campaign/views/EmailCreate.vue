<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppCard, AppInput } from 'src/components/index'
import { required, min } from 'src/app/support/utils/rules'
import StepInfoGeneral from '../components/form/email/StepInfoGeneral'
import StepEmailTemplate from '../components/form/email/StepEmailTemplate'

@Component({
  components: {
    AppCard,
    AppInput,
    StepInfoGeneral,
    StepEmailTemplate
  },
  methods: {
    required,
    min
  }
})
export default class EmailCreate extends Vue {
  protected step:number = 1
  protected form: object = {
    folder: ''
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
          <div class="row">
          </div>
        </div>
      </div>
    </div>
    <div class="col-10">
      <app-card title="Listagem de Campanhas">
        <template #content>
          <q-stepper
            v-model="step"
            ref="stepper"
            color="primary"
            header-nav
            animated
          >
            <q-step
              :name="1"
              title="Dados Gerais"
              icon="settings"
              :error="step < 3"
              :done="step > 1"
            >
             <step-info-general />
            </q-step>

            <q-step
              :name="2"
              title="Selecione o corpo do e-mail"
              icon="create_new_folder"
              :done="step > 2" >
              <step-email-template />
            </q-step>

            <q-step
              :name="3"
              title="Personalize seu e-mail"
              icon="add_comment">
              <step-info-general />
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </template>
      </app-card>
    </div>
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
</style>
