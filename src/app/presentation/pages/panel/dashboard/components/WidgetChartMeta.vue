<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import VueFusionChartsComponent from 'vue-fusioncharts/component'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, Widgets, FusionTheme)
import { sumBy } from 'lodash'

@Component({
  components: {
    vueFusionCharts
  }
})
export default class WidgetChartMeta extends Vue {
  protected width: string = '100%'
  protected height: string = '400'
  protected type: string = 'angulargauge'
  protected format: string = 'json'
  protected dataSource: any = {
    chart: {
      caption: 'Meta total de pesquisas 60.000',
      lowerLimit: '0',
      upperLimit: '60000',
      showValue: '1',
      numberSuffix: '',
      theme: 'fusion',
      showToolTip: 1
    },
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '20000',
          code: '#F2726F'
        },
        {
          minValue: '20000',
          maxValue: '40000',
          code: '#FFC533'
        },
        {
          minValue: '40000',
          maxValue: '60000',
          code: '#62B58F'
        }
      ]
    },
    dials: {
      dial: [
        {
          value: ''
        }
      ]
    }
  }

  @Prop({ required: true, type: Array }) indicators!: Array<object>

  @Watch('indicators')
  async indicatorsChanged () {
    this.dataSource.dials.dial[0].value = sumBy(this.indicators, 'total')
  }

  get meta () {
    const meta = sumBy(this.indicators, 'total')
    const percetual = (meta * 100) / 60000
    return Math.round(percetual * 100) / 100
  }
}
</script>

<template>
  <div class='kt-widget29'>
    <vue-fusion-charts
      :type='type'
      :width='width'
      :height='height'
      :dataFormat='format'
      :dataSource='dataSource'
    ></vue-fusion-charts>
  </div>
</template>
