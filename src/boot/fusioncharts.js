import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app, router, Vue }) => {
  Vue.use(VueFusionCharts, FusionCharts, Column2D, Widgets, FusionTheme)
}
