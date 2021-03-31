<template>
  <div class="m-uploader">
    <label v-if="label"
           :for="forId"
           class="m-uploader_label">
      {{ label }}
    </label>
    <div class="m-uploader_container">
      <div class="m-uploader_add">
        <q-file v-bind:value="value"
                v-bind="$attrs"
                :id="forId"
                ref="input"
                :multiple="multiple"
                append
                class="input"
                v-on="$listeners"
                @focus="setErrorMessage"
                @input="onChange">
        </q-file>
      </div>
      <label  :for="forId"
              :draggable="true"
              @dragover.prevent.stop="onDragover"
              @drop.prevent.stop="onDrop">
        <figure class="m-uploader_imgBox m-uploader_imgBox_addFile"
                @click="addFile">
          <Icon :name="multiple ? 'ic-add' : 'ic-upload'" class="m-uploader_imgBox_icon m-icon--sm" />
        </figure>
      </label>
      <figure v-if="defaultFile" class="m-uploader_imgBox">
        <img :src="defaultFile"
             class="m-uploader_imgBox_img"
             alt="">
      </figure>

      <figure class="m-uploader_imgBox"
              v-for="(item, index) in files"
              :key="index">
        <img :alt="item.name"
             class="m-uploader_imgBox_img"
             :src="item.src">

        <button class="m-uploader_imgBox_btn" type="button">
          <Icon name="ic-close"
                class="m-uploader_imgBox_icon m-icon--xs"
                @click.native="removeFile(index)" />
        </button>
      </figure>
    </div>
    <span class="m-uploader_errorMessage"></span>
  </div>
</template>

<script>
import Icon from '../svg/icon'

const defaultPhoto = '/images/minerios/ferro.png'
// TODO: ajustar hover de imagem padrão e efeitos
// TODO: recuperar imagem da thumbnail quando estiver em tabs
export default {
  name: 'AppUploader',
  components: { Icon },
  props: {
    value: {
      type: [String, Object, File],
    },
    forId: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    noDefaultImage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      files: [],
      defaultFile: !this.noDefaultImage ? defaultPhoto : undefined
    }
  },
  methods: {
    addFile () {
      this.$refs.input.pickFiles()
    },
    removeFile (file) {
      this.$refs.input.removeAtIndex(file)
    },
    onChange (val) {
      this.$emit('input', val)
      if (this.multiple)
        return this.setListFiles(val)

      this.setSingleFile(val)
    },
    setSingleFile (file) {
      this.defaultFile = window.URL.createObjectURL(file)
    },
    setListFiles (files) {
      this.files = files.map(this.toObjectPreview)
    },
    toObjectPreview (file) {
      return ({ name: file.name, src: window.URL.createObjectURL(file) })
    },
    onDragEnter (evt) {
      // console.warn(evt.dataTransfer)
    },
    onDragover (evt) {
      if (evt.preventDefault) {
        evt.preventDefault()
      }
      return false
    },
    onDrop (evt) {
      const dt = evt.dataTransfer
      const { files } = dt

      this.$refs.input.addFiles(files)
    },
    reset () {
      this.files = []
      this.defaultFile = this.$options.data.apply(this).defaultFile
    },
    setErrorMessage () {
      const message = this.$refs.input.$el.getElementsByClassName('q-field__messages')[0] || ''
      this.$el.getElementsByClassName('m-uploader_errorMessage')[0].append(message)
    }
  },
}
</script>

<style lang="scss">
@import '../../css/utilities/_all';

.m-uploader {
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: $gap-rem--xs;
  width: 100%;
  @include scrollbars(pxToRem(6), $color-gray, pxToRem(6));

  .q-field__messages {
    color: $negative;
    padding-top: $gap--xs;
  }

  &_label {
    font: {
      size: $font--xsl;
      weight: bold;
    }
    color:  $color-dark-02;
  }

  &_add {}

  &_container {
    display: flex;
    flex-direction: row;
    margin-top: $gap--xs;
  }

  &_imgBox {
    display: flex;
    position: relative;
    border: pxToRem(2) solid $color-gris-01;
    border-radius: $generic-border-radius;
    min-width: pxToRem(150);
    min-height: pxToRem(150);
    width: pxToRem(150);
    height: pxToRem(150);
    opacity: 1;
    transition: .5s ease;

    &:not(:first-child) {
      margin-left: $gap-rem--xs;
    }

    :hover > &_img {
      opacity: .4;
    }

    &_img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &_btn {
      visibility: hidden;
      position: absolute;
    }

    &_icon {
      color: $color-brand-01;
      visibility: visible;
    }

    &_addFile {
      border-style: dashed;
      justify-content: center;
      align-items: center;
    }
  }

  .q-field__inner {
    background-color: red;
    height: 0;
    width: 0;
  }

  .q-field--auto-height .q-field__control,
  .q-field--auto-height .q-field__native {
    min-height: auto;
  }

  .q-file .q-field__native {
    overflow: hidden;
    line-height: 0;
    width: 0;
  }

  .q-field--standard .q-field__control:before {
    border: none;
    height: 0!important;
    width: 0!important;
  }
}
</style>
