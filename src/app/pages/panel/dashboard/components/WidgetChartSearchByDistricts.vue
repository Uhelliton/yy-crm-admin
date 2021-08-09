<script lang='ts'>
import { Component, Watch, Vue } from 'vue-property-decorator'
import VueFusionChartsComponent from 'vue-fusioncharts/component'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import PowerCharts from 'fusioncharts/fusioncharts.powercharts'
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, PowerCharts)

import { SearchStatisticService } from 'src/app/domains/search/services/search-statistic.service'
import { map, min, max } from 'lodash'

@Component({
  components: {
    vueFusionCharts
  }
})
export default class WidgetChartSearchByDistricts extends Vue {
  protected form: any = { meetCandidate: true }
  protected width: string = '100%'
  protected height: string = '800'
  protected type: string = 'heatmap'
  protected format: string = 'json'
  protected dataSource: any = {
    chart: {
      caption: 'Mapa de calor por Bairros/Região',
      yaxisname: '',
      theme: 'fusion',
      showvalues: '1',
      plottooltext: '<b>Total: $dataValue</b>{br}$trLabel'
    },
    dataset: [
      {
        data: []
      }
    ],
    colorrange: {
      gradient: '1',
      minvalue: '0',
      code: '00A971',
      startlabel: 'Frio',
      endlabel: 'Quente',
      color: [
        {
          code: 'EFD951',
          minvalue: '',
          maxvalue: '',
          label: ''
        },
        {
          code: 'FD8963',
          minvalue: '',
          maxvalue: '',
          label: ''
        },
        {
          code: 'D60100',
          minvalue: '',
          maxvalue: '',
          label: ''
        }
      ]
    }
  }

  @Watch('form.meetCandidate', { immediate: true, deep: true })
  async onMeetCandidateChanged () {
    await this.fetchResumeSearchsByDistricts()
  }

  async mounted () {
    await this.fetchResumeSearchsByDistricts()
  }

  get queryString () {
    return `?meetCandidate=${this.form.meetCandidate}`
  }

  protected async fetchResumeSearchsByDistricts () {
    const request = await SearchStatisticService.findResumeSearchByDistricts(this.queryString)
    const response = request.data
    const data = map(response, (indicator: any) => {
      return {
        rowid: indicator.region,
        columnid: indicator.name,
        value: indicator.total,
        trlabel: indicator.name
      }
    })
    this.dataSource.dataset[0].data = data
    this.setColorRangeValue(response)
  }

  private setColorRangeValue (response : Array<object>) {
    const dataOnlyValues = map(response, (indicator: any) => indicator.total)
    let minValue = min(dataOnlyValues)
    let maxValue = max(dataOnlyValues)
    let averageValueMin = Math.round(maxValue / 3)
    let averageValueMax = Math.round(maxValue - averageValueMin)

    this.dataSource.colorrange.minvalue = minValue
    this.dataSource.colorrange.color[0].maxvalue = averageValueMin
    this.dataSource.colorrange.color[1].maxvalue = averageValueMax
    this.dataSource.colorrange.color[2].maxvalue = maxValue
  }
}
</script>

<template>
  <div class='kt-widget29'>
    <a-radio-group v-model="form.meetCandidate" :default-value="true" size="small" class="ml-2 mt-2">
      <a-radio-button :value="true">
        Conhece o Canditato
      </a-radio-button>
      <a-radio-button :value="false">
        Não conhece o Canditato
      </a-radio-button>
    </a-radio-group>
    <vue-fusion-charts
      :type='type'
      :width='width'
      :height='height'
      :dataFormat='format'
      :dataSource='dataSource'
    ></vue-fusion-charts>
  </div>
</template>
