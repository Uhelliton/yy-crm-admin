<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class PublicPanel extends Vue {
}
</script>

<template>
  <div class="row q-col-gutter-md">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar-xs me-3">
              <i class="bx bx-user-plus h2 text-primary align-middle mb-0 mr-3"></i>
            </div>
            <h5 class="font-size-14 mb-0">Total de Contatos</h5>
          </div>
          <div class="text-muted mt-4">
            <h4> 1,452</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar-xs me-3">
              <i class="bx bx-mail-send h2 text-primary align-middle mb-0 mr-3"></i>
            </div>
            <h5 class="font-size-14 mb-0">Contatos com e-mail</h5>
          </div>
          <div class="text-muted mt-4">
            <h4> 1,452</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar-xs me-3">
              <i class="bx bx-phone-incoming h2 text-primary align-middle mb-0 mr-3"></i>
            </div>
            <h5 class="font-size-14 mb-0">Contatos com telefones</h5>
          </div>
          <div class="text-muted mt-4">
            <h4> 1,452</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
