<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AppIcon from 'src/app/presentation/components/icon/Icon.vue'

@Component({
  components: { AppIcon }
})
export default class TableActionExtession extends Vue {
  @Prop({ required: false, type: String }) readonly btnNewTitle: string | undefined

  public onSelectAction (event: Event) {
    this.$emit('action', event)
  }
}
</script>

<template>
  <div class="d-flex justify-content-end mb-4">
    <div class="text-sm-right">
      <button type="button"
              id="NEW"
              class="btn btn-light-primary mb-2 mr-2"
              @click="onSelectAction($event)">
        <i class="bx bx-plus font-size-16 mr-1"></i> {{ btnNewTitle }}
      </button>
    </div>
    <div class="text-sm-right">
      <button type="button"
              id="FILTER"
              @click="onSelectAction($event)"
              class="btn btn-light-info mb-2 mr-2">
        <i class="bx filter-alt font-size-16 mr-1"></i> Filtros
      </button>
    </div>
    <div class="text-sm-right">
      <b-dropdown variant="primary">
        <template v-slot:button-content>
          Ações <i class="mdi mdi-chevron-down"></i>
        </template>
        <b-dropdown-item  @click="onSelectAction($event)" id="EXPORT_EXCEL">
          <app-icon icon="file-find" />  Excel
        </b-dropdown-item>
        <b-dropdown-item  @click="onSelectAction($event)" id="EXPORT_CSV">
          <app-icon icon="file-find" /> CSV
        </b-dropdown-item>
        <b-dropdown-item  @click="onSelectAction($event)" id="EXPORT_PDF">
          <app-icon icon="file-find" /> PDF
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
