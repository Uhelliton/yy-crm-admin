<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppCard, AppInput } from 'src/components/index'
import { required, min } from 'src/app/support/utils/rules'
import StepInfoGeneral from '../components/form/email/StepInfoGeneral'
import StepEmailTemplate from '../components/form/email/StepEmailTemplate'
import StepEmailSetup from '../components/form/email/StepEmailSetup'

@Component({
  components: {
    AppCard,
    AppInput,
    StepInfoGeneral,
    StepEmailTemplate,
    StepEmailSetup
  },
  methods: {
    required,
    min
  }
})
export default class EmailCreate extends Vue {
  protected type:number = 1
  protected step:number = 1
  protected form: object = {
    folder: ''
  }

  protected onListenerAction (type: number) {
    this.step = 3
    this.type = type
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
          <section class="c-stepper">
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              keep-alive
              header-nav
              class="m-stepper no-shadow"
              animated
              alternative-labels>
              <q-step
                :name="1"
                title="Dados Gerais"
                :done="step > 1"
              >
               <step-info-general />
              </q-step>

              <q-step
                :name="2"
                title="Selecione o corpo do e-mail"
                :done="step > 2" >
                <step-email-template @action="onListenerAction" />
              </q-step>

              <q-step
                :name="3"
                title="Personalize seu e-mail"
                icon="add_comment">
                <step-email-setup :type="type" />
              </q-step>

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <button type="button" v-if="step !== 2" class="btn btn-info"  @click="$refs.stepper.next()" >
                    {{ step === 3 ? 'Finalizar' : 'Configurar Email' }}
                  </button>
                  <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </section>
        </template>
      </app-card>
    </div>
  </div>
</template>

<style lang="scss">
.q-checkbox__bg {
  border: 1px solid currentColor;
  border-radius: 2px;
}

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
