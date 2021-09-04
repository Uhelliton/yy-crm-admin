<template>
  <div>
    <q-table class="table table-centered table-nowrap"
             :class="{'table--shadowRemove': shadowRemove}"
             :data="rows"
             :columns="thead"
             separator="none"
             :loading="loading"
             :pagination.sync="pagination"
             v-bind="$attrs"
             v-on="$listeners"
             hide-pagination>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope"/>
      </template>
    </q-table>

    <div class="row justify-start justify-between q-mt-md">
      <q-pagination v-model="pagination.page"
                    v-if="paginate.hasOwnProperty('currentPage')"
                    class="m-pagination"
                    outline
                    :max="pagesNumber"
                    :max-pages="6"
                    :boundary-numbers="false"
                    :direction-links="true"
                    icon-prev="img:statics/icons/ic-angle-left.svg"
                    icon-next="img:statics/icons/ic-angle-right.svg"
                    size="sm" />
      <div class="m-pagination--qty" v-if="pagination.total > 0">
        |  &nbsp;&nbsp;&nbsp;&nbsp; {{ pagination.total }} registros
      </div>

      <app-select class="m-select__page"
                  dense
                  for-id="app-table"
                  @input="onChangePageLength"
                  :value="pagination.records.pageLength"
                  v-model="pagination.records.pageLength"
                  :options="pagination.records.options" />
    </div>
  </div>
</template>

<script>
import AppSelect from '../form/AppSelect'

export default {
  components: {
    AppSelect
  },
  data: () => ({
    pagination: {
      sortBy: '',
      descending: false,
      page: 1,
      rowsPerPage: 15,
      total: 0,
      records: {
        pageLength: 15,
        options: [15, 30, 50, 100]
      }
    }
  }),

  props: {
    thead: {
      type: [Array, Object],
      required: true,
      default: () => []
    },
    rows: {
      type: [Array, Object],
      required: true,
      default: () => []
    },
    paginate: {
      type: Object,
      required: false,
      default: () => {}
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    },
    shadowRemove: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },

  watch: {
    pagination (object) {
      if (object.sortBy) {
        this.dispatch(this.pagination.page, this.setSortBy())
      }
    },
    'pagination.page': {
      handler (page) {
        this.onChangePage(page)
      },
      deep: true
    },
    paginate () {
      const { perPage, currentPage, total } = this.paginate
      this.pagination.total = total
      this.pagination.rowsPerPage = perPage
      this.pagination.records.pageLength = perPage

      if (currentPage > 1) {
        this.pagination.rowsPerPage = 0
      }
    }
  },

  computed: {
    pagesNumber () {
      const { total, perPage } = this.paginate
      return Math.ceil(total / perPage)
    }
  },

  methods: {
    onChangePage (page) {
      const { sortBy, rowsPerPage } = this.pagination
      if (sortBy) {
        this.dispatch(page, this.setSortBy(), rowsPerPage)
      } else {
        this.dispatch(page, null, rowsPerPage)
      }
    },
    onChangePageLength (record) {
      let page = 1
      this.pagination.page = page
      this.dispatch(page, null, record)
    },
    setSortBy () {
      const pagination = this.pagination
      return (pagination.descending) ? pagination.sortBy : `-${pagination.sortBy}`
    },
    dispatch (page = 1, sort = null, pageLength = 1) {
      const pagination = this.pagination
      const dispatch = {
        page: page,
        sort: sort,
        pageLength: (pageLength === 0) ? pageLength : pagination.records.pageLength
      }
      this.$emit('server-request', dispatch)
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/app/theme/scss/global/utilities/all';

.m-pagination {
  .q-pagination {
    .text-primary {
      color: #536976!important;
    }
    .q-btn-item {
      padding: pxToRem(4) pxToRem(6);
      color: #536976!important;
    }
  }

  .q-btn--outline .q-btn__wrapper:before {
    border: 1px solid #536976!important;
    color: #536976!important;
  }
  &--qty {
    position: absolute;
    left: 240px;
    margin-top: 20px
  }
}
</style>
