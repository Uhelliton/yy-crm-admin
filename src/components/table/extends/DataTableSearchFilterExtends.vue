<script>
import { exportFile, encodingToCsv } from 'src/app/support/utils/export-files'

export default {
  data: () => ({
    dataTable: {
      search: '',
      loading: false,
      thead: [],
      rows: [],
      pagination: {}
    },
  }),
  async mounted () {
    await this.fetchRecords()
  },
  computed: {
    search () {
      const { dateInit, dateEnd } = this.form
      let filters

      if ((dateInit && dateInit.length) && (dateEnd && dateEnd.length)) {
        filters = {'filter[starts_between]': `${dateInit},${dateEnd}`}
      }
      if (this.dataTable.search.length) {
        filters = {'filter[global]': this.dataTable.search, ... filters}
      }

      return filters
    }
  },
  watch: {
    'dataTable.search': {
      handler (value) {
        if (value.length >= 3 || value.length === 0)
          this.fetchRecords()
      },
      deep: true
    }
  },
  methods: {
    setQueryParams (arg = {}) {
      return  {
        page: arg.page || 1,
        sort: arg.sort,
        per_page: arg.pageLength,
        ...this.search,
      }
    },
    exportFile() {
      const { thead, rows } = this.dataTable
      const content = encodingToCsv(thead, rows)
      exportFile('table-export.csv', content, 'text/csv' )
    },
    setFilterSearch (val) {
      this.dataTable.search = val.search
      if (this.dataTable.search.length >= 3 || this.dataTable.search.length === 0)
        this.fetchRecords()
    },
    async setFormData (form) {
      this.form = { ...form }
      const { dateInit, dateEnd } = this.form

      if ((dateInit && dateInit.length === 10) && (dateEnd && dateEnd.length === 10)) {
        await this.fetchRecords()
        return
      }
      console.log(form)
    },
    async fetchRecords() {}
  }
}
</script>
