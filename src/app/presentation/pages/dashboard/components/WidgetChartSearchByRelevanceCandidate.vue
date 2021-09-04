<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { SearchStatisticService } from 'src/app/domains/search/services/search-statistic.service'
import VueFusionChartsComponent from 'vue-fusioncharts/component'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, Widgets, FusionTheme)

@Component({
  components: { vueFusionCharts }
})
export default class WidgetChartMeetCandidate extends Vue {
    private indicator: any = {}
    protected width: string = '100%'
    protected height: string = '300'
    protected type: string = 'doughnut3d'
    protected format: string = 'json'
    protected dataSource: any = {
      chart: {
        caption: 'Você conchece ou já ouviu falar do pré candidato Luigi do La Torre?',
        showvalues: '1',
        showpercentintooltip: '1',
        enablemultislicing: '1',
        usedataplotcolorforlabels: '0',
        legendposition: 'bottom',
        theme: 'fusion'
      },
      data: []
    }

    async mounted () {
      const indicator = await this.fetchSearchByRelevanceCandidate()
      const amountMeet = Math.round(indicator.meetCandidate / indicator.total * 100)
      const amountNoMeet = Math.round(indicator.notMeetCandidate / indicator.total * 100)
      this.dataSource.data = [
        {
          label: `Conhece o candidato (${indicator.meetCandidate})`,
          value: amountMeet
        }, {
        }, {
          label: `Não conhece o candidato (${indicator.notMeetCandidate})`,
          value: amountNoMeet
        }
      ]
    }

    get total () {
      return this.indicator.meetCandidate + this.indicator.notMeetCandidate
    }

    protected async fetchSearchByRelevanceCandidate () {
      const request = await SearchStatisticService.findSearchByRelevanceCandidate()
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
