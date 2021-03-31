<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { SearchStatisticService } from 'src/app/domains/search/services/search-statistic.service'
import VueFusionChartsComponent from 'vue-fusioncharts/component'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.zoomline'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, Widgets, FusionTheme)
import { forEach } from 'lodash'
import { date } from 'quasar'

// https://www.fusioncharts.com/charts/line-area-charts/line-chart-with-zooming-and-panning?framework=vue
@Component({
  components: { vueFusionCharts }
})
export default class WidgetChartMeetCandidate extends Vue {
    private indicator: any = {}
    protected width: string = '100%'
    protected height: string = '100%'
    protected type: string = 'zoomline'
    protected format: string = 'json'
    protected dataSource: any = {
      chart: {
        yaxisname: 'Relevância do canditado',
        xaxisname: 'Datas',
        forceaxislimits: '1',
        pixelsperpoint: '0',
        pixelsperlabel: '30',
        compactdatamode: '1',
        dataseparator: '|',
        theme: 'fusion'
      },
      categories: [],
      dataset: []
    }

    async mounted () {
      const indicator = await this.fetchSearchByRelevanceCandidate()
      let datesMap: string[] = []
      let meetCandidateMap: number[] = []
      let notMeetCandidateMap: number[] = []
      forEach(indicator, (element: any) => {
        datesMap.push(date.formatDate(element.date, 'MMM DD'))
        meetCandidateMap.push(element.meetCandidate)
        notMeetCandidateMap.push(element.notMeetCandidate)
      })

      this.dataSource.categories = [
        {
          category: datesMap.join('|')
        }
      ]
      this.dataSource.dataset = [
        {
          seriesname: 'Conhece o candidato',
          data: meetCandidateMap.join('|')
        }, {
        }, {
          seriesname: 'Não conhece o candidato',
          data: notMeetCandidateMap.join('|')
        }
      ]
    }

    protected async fetchSearchByRelevanceCandidate () {
      const request = await SearchStatisticService.findSearchRelevanceOfCandidateByDate()
      const response = request.data
      this.indicator = response
      return response
    }
}
</script>

<template>
  <div class='kt-widget14'>
    <vue-fusion-charts
      :type='type'
      :width='width'
      :height='height'
      :dataFormat='format'
      :dataSource='dataSource'>
    </vue-fusion-charts>
  </div>
</template>
