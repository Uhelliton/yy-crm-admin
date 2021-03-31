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

    <div class="row justify-end q-mt-md mr-5">
      <q-pagination v-model="pagination.page"
                    class="m-pagination"
                    :max="pagesNumber"
                    :direction-links="true"
                    icon-prev="img:statics/icons/ic-angle-left.svg"
                    icon-next="img:statics/icons/ic-angle-right.svg"
                    size="sm" />

      <!--<app-select color="purple-12"
                  class="m-select_pageLenght"
                  dense
                  for-id="app-table"
                  @input="onChangePageLength"
                  :value="pagination.records.pageLength"
                  v-model="pagination.records.pageLength"
                  :options="pagination.records.options" />-->
    </div>
  </div>
</template>

<script>
// import AppSelect from "components/form/AppSelect"

export default {
  // components: { AppSelect },
  data: () => ({
    pagination: {
      sortBy: '',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      total: 0,
      records: {
        pageLength: 10,
        options: [10, 50, 100, 500]
      }
    }
  }),

  props: {
    rowsPerPage: {
      type: Number,
      required: false,
      default: () => 10
    },
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
      const { currentPage, total } = this.paginate
      this.pagination.total = total

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
      if (this.pagination.sortBy) {
        this.dispatch(page, this.setSortBy())
      } else {
        this.dispatch(page)
      }
    },
    onChangePageLength (record) {
      this.dispatch(this.pagination.page, null, record)
    },
    setSortBy () {
      const pagination = this.pagination
      return (pagination.descending) ? pagination.sortBy : `-${pagination.sortBy}`
    },
    dispatch (page = 1, sort = null, pageLength = null) {
      const dispatch = {
        page: page,
        sort: sort,
        pageLength: pageLength
      }
      this.$emit('server-request', dispatch)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/app/theme/scss/global/utilities/all';
.m-pagination {

  button:first-child {
    img {
      margin-top: -14px;
      margin-left: -60px;
    }
  }

  button:last-child {
    img {
      margin-top: -14px;
      margin-right: -60px;
    }
  }

  .row {
    button {
      min-width: 2em!important;
      margin: 0 4px;
      .block {
        margin-right: -6px;
      }
    }
  }

  .q-btn__wrapper {
    padding: 14px 6px!important;
    min-width: 0px;
    min-height: 0px;
    color: #fff;
    background-color: #556ee6;
    border-color: #556ee6;
  }

  .q-btn {
    .block {
      margin-top: -10px;
    }
    .q-icon, .q-btn .q-spinner {
      font-size: 3em;
    }
  }
}
.m-select_pageLenght {
  .q-field--auto-height.q-field--dense .q-field__control,
  .q-field--auto-height.q-field--dense .q-field__native {
    min-height: pxToRem(25)!important;
    height: pxToRem(25)!important;
  }
  .q-field {
    .q-field__inner {
      font-size: $font--xs;
      .q-field__control {
        padding: 0 0 0 pxToRem(10);
      }
      .q-field__append {
        margin-top: pxToRem(-10);
        svg {
          height: pxToRem(8);
          width: pxToRem(8);
        }
      }
    }
  }
}
</style>
