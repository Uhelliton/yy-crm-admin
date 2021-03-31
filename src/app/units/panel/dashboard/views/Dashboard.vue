<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  overviewChart,
  bitconinChart,
  ethereumChart,
  litecoinChart
} from './data'
import Apexchart from 'vue-apexcharts'

@Component({
  components: { Apexchart }
})
export default class Dashboard extends Vue {
  public overviewChart: object = overviewChart
  public bitconinChart: object = bitconinChart
  public ethereumChart: object = ethereumChart
  public litecoinChart: object = litecoinChart
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-xl-8">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i class="mdi mdi-finance h2 text-primary align-middle mb-0 mr-3"></i> Receitas
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>R$ 27.439.44</h5>
                      <p class="text-muted text-truncate mb-0">
                        - 4.102 ( 0.1 % )
                        <i class="mdi mdi-arrow-down ml-1 text-danger"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="ethereumChart.series"
                        :options="ethereumChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i class="mdi mdi-finance h2 text-warning align-middle mb-0 mr-3"></i> Despesas
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>R$ 9.134.39</h5>
                      <p class="text-muted text-truncate mb-0">
                        + 0.0012 ( 0.2 % )
                        <i class="mdi mdi-arrow-up ml-1 text-success"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="bitconinChart.series"
                        :options="bitconinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs mr-3">
                    <span
                      class="avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
                    >
                      <i class="bx bx-group"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Membros</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    1.452
                    <i class="mdi mdi-chevron-up ml-1 text-success"></i>
                  </h4>
                  <div class="d-flex">
                    <span class="badge badge-soft-success font-size-12">+ 0.2%</span>
                    <span class="ml-2 text-truncate">Do período anterior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs mr-3">
                    <span
                      class="avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
                    >
                      <i class="bx bx-user-plus"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Congregados</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    18
                    <i class="mdi mdi-chevron-up ml-1 text-success"></i>
                  </h4>
                  <div class="d-flex">
                    <span class="badge badge-soft-success font-size-12">+ 0.2%</span>
                    <span class="ml-2 text-truncate">período anterior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs mr-3">
                    <span
                      class="avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
                    >
                      <i class="bx bx-id-card"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Células</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    26
                    <i class="mdi mdi-chevron-up ml-1 text-success"></i>
                  </h4>

                  <div class="d-flex">
                    <span class="badge badge-soft-warning font-size-12">0%</span>
                    <span class="ml-2 text-truncate">período anterior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <div class="mr-4">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div class="media-body">
                <div class="text-muted">
                  <h5>Igreja Missionária Unidada</h5>
                  <p class="mb-1">contato@imub.com</p>
                  <p class="mb-0">Id: #SG234</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border-top">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <p class="text-muted mb-2">Saldo Disponível</p>
                  <h5>R$ 9.148,23</h5>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="text-sm-right mt-4 mt-sm-0">
                  <p class="text-muted mb-2">Desde o último mês</p>
                  <h5>
                    + R$ 248,35
                    <span class="badge badge-success ml-1 align-bottom">+ 1.3 %</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <div class="text-center">
              <div class="row">
                <div class="col-sm-4">
                  <div>
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-send"></i>
                    </div>

                    <p class="text-muted mb-2">Bradesco</p>
                    <h5>R$ 654.42</h5>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-send"></i>
                    </div>

                    <p class="text-muted mb-2">Caixa Economica</p>
                    <h5>R$ 1.054,32</h5>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-wallet"></i>
                    </div>

                    <p class="text-muted mb-2">Carteira</p>
                    <h5>R$ 824.34</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Estatísticas receitas</h4>

            <div>
              <div id="overview-chart" class="apex-charts" dir="ltr">
                <div class="toolbar button-items text-center">
                  <button type="button" class="btn btn-light btn-sm" id="one_month">1M</button>
                  <button type="button" class="btn btn-light btn-sm" id="six_months">6M</button>
                  <button type="button" class="btn btn-light btn-sm active" id="one_year">1Y</button>
                </div>
                <apexchart
                  class="apex-charts"
                  type="area"
                  height="275"
                  dir="ltr"
                  :series="overviewChart.series"
                  :options="overviewChart.chartOptions"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Aniversariantes do mês</h4>
            <ul class="verti-timeline list-unstyled">
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      07 Jun
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Uhelliton Andrade</div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      17 Jun
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>
                      Monique Queiroz
                    </div>
                  </div>
                </div>
              </li>
              <li class="event-list active">
                <div class="event-timeline-dot">
                  <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      23 Jun
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Nicolas Queiroz</div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      28 Jun
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Raul Andrade</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="text-center mt-4">
              <a href="javascript: void(0);" class="btn btn-primary btn-sm">ver todos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
