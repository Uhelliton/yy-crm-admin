<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import VueFusionChartsComponent from 'vue-fusioncharts/component'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
// import GannelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel'
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, Widgets, FusionTheme)
import { map } from 'lodash'

@Component({
  components: {
    vueFusionCharts
  }
})
export default class WidgetChartMeta extends Vue {
  protected width: string = '100%'
  protected height: string = '400'
  protected type: string = 'column2d'
  protected format: string = 'json'
  protected dataSource: any = {
    chart: {
      caption: 'Estatísticas de pesquisas por equipe',
      // subCaption: 'subtitulo',
      // xAxisName: 'Country',
      // numberSuffix: 'K',
      yAxisName: 'Pesquisas',
      theme: 'fusion'
    },
    data: []
  }

  @Prop({ required: true, type: Array }) indicators!: Array<object>

  @Watch('indicators')
  async indicatorsChanged () {
    this.dataSource.data = this.getDataMap()
  }

  private getDataMap () {
    return map(this.indicators, (indicator: any) => {
      return {
        label: indicator.team,
        value: indicator.total
      }
    })
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
