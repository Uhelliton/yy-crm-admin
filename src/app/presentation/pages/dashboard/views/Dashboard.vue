<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sellingchart from '../components/sellingchart.vue'
import {
  overviewChart,
  bitconinChart,
  ethereumChart,
  litecoinChart,
  earningLineChart,
  salesAnalyticsDonutChart
} from './data'
import Apexchart from 'vue-apexcharts'

@Component({
  components: { Apexchart, Sellingchart }
})
export default class Dashboard extends Vue {
  public overviewChart: object = overviewChart
  public bitconinChart: object = bitconinChart
  public ethereumChart: object = ethereumChart
  public litecoinChart: object = litecoinChart
  public earningLineChart: object = earningLineChart
  public salesAnalyticsDonutChart:object = salesAnalyticsDonutChart
}
</script>

<template>
  <div>
    <div class="row q-col-gutter-md">
      <div class="col-xl-8">
        <div class="row q-col-gutter-xs-none q-col-gutter-md">
          <div class="col-xs-12 col-md-6">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i class="bx bx-mail-send h2 text-primary align-middle mb-0 mr-3"></i> Total de destinatários impactados
                </p>

                <div class="row q-col-gutter-xs-none q-col-gutter-md">
                  <div class="col-6">
                    <div>
                      <h5>1.098.525</h5>
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
                  <i class="bx bx-hive h2 text-warning align-middle mb-0 mr-3"></i> Últimas 7 ações pontuais
                </p>

                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4">
                        <h5>3.103.997</h5>
                        <p class="text-muted text-truncate mb-0">
                          destinatários
                        </p>
                      </div>
                      <div class="col-4">
                        <h5>97,13%</h5>
                        <p class="text-muted text-truncate mb-0">
                          entregues
                        </p>
                      </div>
                      <div class="col-4">
                        <h5>2,87%</h5>
                        <p class="text-muted text-truncate mb-0">
                          bounces
                        </p>
                      </div>
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
          <div class="col-xs-12 col-xl-12">
            <div class="card">
              <div class="card-body">
                <div class="clearfix">
                  <div class="float-end">
                    <div class="input-group input-group-sm">
                      <select class="form-select form-select-sm">
                        <option value="JA">Jan</option>
                        <option value="DE">Dec</option>
                        <option value="AB" selected>ABR</option>
                        <option value="OC">Oct</option>
                      </select>
                      <label class="input-group-text">Meses</label>
                    </div>
                  </div>
                  <h4 class="card-title mb-4"> Indicadores de Performance </h4>
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="text-muted">
                      <div class="mb-4">
                        <span class="badge badge-soft-success font-size-12 me-1">1.22 %</span>
                        <h4>CTR</h4>
                      </div>

                      <div class="mb-4">
                        <span class="badge badge-soft-success font-size-12 me-1">17 %</span>
                        <h4>CTR</h4>
                      </div>

                      <div class="mb-4">
                        <span class="badge badge-soft-success font-size-12 me-1">34 %</span>
                        <h4>Aberturas</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <apexchart
                      class="apex-charts"
                      dir="ltr"
                      height="300"
                      :series="earningLineChart.series"
                      :options="earningLineChart.chartOptions"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-xl-4">
        <div class="card">
          <div class="card-body pb-0">
            <div class="clearfix">
              <div class="float-end">
                <div class="input-group input-group-sm">
                  <select class="form-select form-select-sm">
                    <option value="JA" selected>Jan</option>
                    <option value="DE">Dec</option>
                    <option value="NO">Nov</option>
                    <option value="OC">Oct</option>
                  </select>
                  <label class="input-group-text">Meses</label>
                </div>
              </div>
              <h4 class="card-title mb-4"></h4>
            </div>

            <div class="text-muted text-center">
              <h4>Envios automáticos</h4>
            </div>

            <div class="table-responsive mt-4 mb-0">
              <table class="table align-middle mb-0">
                <tbody>
                <tr>
                  <td>
                    <h5 class="font-size-14 mb-1">Feliz Páscoa</h5>
                    <p class="text-muted mb-0">06/04/2021</p>
                  </td>

                  <td>
                    <Sellingchart :seriesvalue="37" :Chartcolor="'#556ee6'" />
                    <p class="text-muted ml-4 mb-1">CTR 37 %</p>
                  </td>
                  <td>
                    <Sellingchart :seriesvalue="37" :Chartcolor="'#f46a6a'" />
                    <p class="text-muted  ml-4  mb-1">CTO 37 %</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 class="font-size-14 mb-1">DIA DO CONSUMIDOR - campanha 01 </h5>
                    <p class="text-muted mb-0">06/04/2021</p>
                  </td>

                  <td>
                    <Sellingchart :seriesvalue="20" :Chartcolor="'#556ee6'" />
                    <p class="text-muted ml-4 mb-1">CTR 80 %</p>
                  </td>
                  <td>
                    <Sellingchart :seriesvalue="80" :Chartcolor="'#f46a6a'" />
                    <p class="text-muted  ml-4  mb-1">CTO 20 %</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 class="font-size-14 mb-1">Feliz Páscoa - 08</h5>
                    <p class="text-muted mb-0">04/04/2021</p>
                  </td>

                  <td>
                    <Sellingchart :seriesvalue="5" :Chartcolor="'#556ee6'" />
                    <p class="text-muted ml-4 mb-1">CTR 37 %</p>
                  </td>
                  <td>
                    <Sellingchart :seriesvalue="95" :Chartcolor="'#f46a6a'" />
                    <p class="text-muted  ml-4  mb-1">CTO 37 %</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 class="font-size-14 mb-1">Inclua o nosso All inclusive</h5>
                    <p class="text-muted mb-0">02/04/2021</p>
                  </td>

                  <td>
                    <Sellingchart :seriesvalue="18" :Chartcolor="'#556ee6'" />
                    <p class="text-muted ml-4 mb-1">CTR 37 %</p>
                  </td>
                  <td>
                    <Sellingchart :seriesvalue="77" :Chartcolor="'#f46a6a'" />
                    <p class="text-muted  ml-4  mb-1">CTO 37 %</p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
