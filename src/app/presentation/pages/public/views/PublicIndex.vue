<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppCard, AppTable } from 'src/app/presentation/components/index'
import { PublicService } from 'src/app/domains/public/services/public.service'
import { PublicModel } from 'src/app/domains/public/models/public.model'
import { DataTable } from 'src/app/infra/typings'
import { HttpStatus } from 'src/app/infra/contexts/http.context'

@Component({
  components: { AppCard, AppTable }
})
export default class PublicIndex extends Vue {
  async mounted () {
    await this.fetchRecords()
  }

  public dataTable: DataTable<PublicModel> = {
    search: '',
    loading: false,
    thead: [
      { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
      { name: 'name', label: 'Nome', field: 'name', align: 'left', sortable: true },
      { name: 'contactQty', label: 'Qtd Contatos', field: 'contactQty', align: 'left', sortable: true },
      { name: 'contactMailQty', label: 'Qtd Email', field: 'contactMailQty', align: 'left', sortable: true },
      { name: 'contactPhoneQty', label: 'Qtd Telefone', field: 'contactMailQty', align: 'left', sortable: true },
      { name: 'createdAt', label: 'Data Criação', field: 'createdAt', align: 'left', sortable: true },
      { name: 'action', label: '', field: 'action' }
    ],
    rows: [],
    pagination: {}
  }

  protected async fetchRecords () {
    this.dataTable.loading = true
    try {
      const response = await PublicService.all()
      const { data, status } = response

      if (status === HttpStatus.OK) {
        this.dataTable.rows = data
      }
    } catch (err) {
      // @ts-ignore
      this.$notify.error(err)
    } finally {
      this.dataTable.loading = false
    }
  }
}
</script>

<template>
  <AppCard title="Listagem de Publico">
    <template #content>
      <AppTable :thead="dataTable.thead"
                 :rows="dataTable.rows"
                 :paginate="dataTable.pagination"
                 :loading="dataTable.loading"
                 row-key="public"
                 @server-request="fetchRecords"
                 shadow-remove>
        <template #body-cell-action="props">
          <q-td>
            <button class="m-button--reset m-button--circle" type="button">
              <q-menu class="m-dropdownMenu">
                <ul class="m-dropdownMenu__menuList">
                  <li class="m-dropdownMenu__item">
                    Editar {{ props.row.id }}
                  </li>
                </ul>
              </q-menu>
            </button>
          </q-td>
        </template>
      </AppTable>
    </template>
  </AppCard>
</template>

<style lang="scss"></style>
