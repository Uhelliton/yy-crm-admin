<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'
import { AppIcon } from 'src/components/index'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

@Component({
  components: {
    VueSlickCarousel,
    AppIcon
  }
})
export default class EmailCreate extends Vue {
  protected emails: Array<object> = [
    {
      id: 1,
      name: 'Email 01',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/bem-vindo/img/thumbnail_01.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    },
    {
      id: 2,
      name: 'Email 02',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/dia-dos-namorados/img/thumbnail.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    },
    {
      id: 3,
      name: 'Email 03',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/dia-dos-pais/img/thumbnail.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    },
    {
      id: 4,
      name: 'Email 04',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/bem-vindo/img/thumbnail_02.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    },
    {
      id: 5,
      name: 'Email 05',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/blackfriday/img/thumbnail.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    },
    {
      id: 6,
      name: 'Email 06',
      thumb: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/dia-dos-pais/img/thumbnail.jpg',
      link: 'https://crmstaticfiles.s3-sa-east-1.amazonaws.com/Templates_HTML/recompra-ota/recompra-ota.html'
    }
  ]
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <div class="card mini-stats-wid">
          <div class="card-body">
            <div class="media">
              <div class="media-body">
                <h5 class="text-muted fw-medium mb-2"  style="min-height: 40px">Personalize seu e-mail do zero</h5>
                <button class="btn btn-light-warning">
                  Criar modelo
                </button>
              </div>
              <div class="avatar-sm align-self-center mini-stat-icon rounded-circle bg-primary">
              <span class="avatar-title">
                <i class="bx bx-copy-alt font-size-24"></i>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card mini-stats-wid">
          <div class="card-body">
            <div class="media">
              <div class="media-body">
                <h5 class="text-muted fw-medium mb-2"  style="min-height: 40px">Personalize seu e-mail do zero</h5>
                <button class="btn btn-light-warning">
                  Importar
                </button>
              </div>
              <div class="avatar-sm align-self-center mini-stat-icon rounded-circle bg-primary">
              <span class="avatar-title">
                <app-icon icon="mail-send" class="font-size-24" />
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card mini-stats-wid">
          <div class="card-body">
            <div class="media">
              <div class="media-body">
                <h5 class="text-muted fw-medium mb-2"  style="min-height: 40px">Existe uma edição em andamento, gostaria de continuar?</h5>
                <button class="btn btn-light-warning">
                  Continuar Edição
                </button>
              </div>
              <div class="avatar-sm align-self-center mini-stat-icon rounded-circle bg-primary">
              <span class="avatar-title">
                <app-icon icon="mail-send"  class="font-size-24" />
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-40 mb-30">
      <h3>Modelos pré definidos</h3>
      <div class="row">
        <div class="search-box mb-2 me-2 offset-md-9 col-md-3">
          <div class="position-relative  mr-4 ">
            <input type="text" placeholder="buscar..." class="form-control bg-light border-light rounded">
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div>
      </div>
      <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="6">
        <div v-for="email in emails" :key="email.id">
          <div class="box21 mr-4">
            <img :src="email.thumb" alt="">
            <div class="box-content">
              <h4 class="title">{{ email.name }}</h4>
              <p class="description">Lorem ipsum dolor sit amet</p>
              <a href="javascript:" class="btn btn-primary me-1 px-5"> Selecionar </a>
              <a :href="email.link" target="_blank" class="btn btn-warning me-1 px-5 mt-4"> Visualizar </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
