<template>
  <q-file @input="onInput"
          class="m-file"
          :class="{ 'm-file--only-button': onlyButton }"
          :label="value ? undefined : label"
          ref="inputFile"
          v-on="$listeners"
          v-bind:value="value"
          v-bind="{ ...$attrs }">
    <template #append>
      <Icon @click.native="openFile"
            class="m-icon--xsl on-left cursor-pointer"
            name="ic-eye"
            v-if="preview" />
      <AppButton @click="callInput"
                 :class="{ 'm-button--mdl': !onlyButton, 'm-button--md': onlyButton }"
                 class="q-pb-xs"
                 color="primary"
                 :disabled="disable"
                 :icon="btnIcon"
                 :label="btnLabel"
                 :loading="loading"
                 no-caps
                 :percentage="percentage" />
    </template>

  </q-file>
</template>

<script>
import AppButton from './AppButton'
import Icon from '../svg/icon'
export default {
  name: 'AppFile',
  components: { AppButton, Icon },
  props: {
    disable: {
      type: Boolean,
    },
    value: {
      type: [String, Object, File],
    },
    label: {
      type: String
    },
    btnLabel: {
      type: String,
      default: () => 'Enviar'
    },
    btnIcon: {
      type: String,
      default: 'ic-upload'
    },
    loading: {
      type: Boolean
    },
    percentage: {
      type: Number,
      default: 0
    },
    preview: {
      type: Boolean,
      default: false
    },
    onlyButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    callInput () {
      this.$refs.inputFile.pickFiles()
    },
    onInput (value) {
      this.$emit('input', value)
    },
    openFile () {
      this.$emit('openFiles', this.value)
    }
  }
}
</script>

<style lang="scss">
@import '../../css/utilities/_all';

.m-file {
  .q-field__control {
    background: $color-gris-04;
    border-radius: pxToRem(28);
    padding: 0 pxToRem(20);
  }

  &:not(.q-field--outlined) {
    .q-field__control:before, .q-field__control:after {
      content: none;
    }
  }

  .q-field__native div {
    font-size: $font--xsl;
    color: $color-gris-02;
  }

  &.q-field--auto-height.q-field--dense .q-field__control {
    padding: 0 20px;
  }

  .q-icon {
    display: none;
  }

  &--only-button {
    .q-field__control {
      background: none;
      padding: 0;
    }

    .q-field__control-container {
      display: none;
    }

    .q-field__inner {
      display: contents;
    }

    .q-btn {
      padding: 0 pxToRem(5);
    }
  }

  &--outlineWhite {
    .q-field__control {
      background-color: $color-white;
      border: pxToRem(1) solid $color-gris-05;
    }
  }
}
</style>
