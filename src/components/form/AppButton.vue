<template>
  <div class="m-button">
    <q-btn color="primary"
           :class="{ 'full-width': fullWidth }"
           :label="label"
           v-bind="{ ...$attrs, icon: undefined }"
           v-on="$listeners">
      <slot v-for="slot in Object.keys($slots)"
            :name="slot"
            :slot="slot"/>
      <template v-slot:default v-if="icon">
        <Icon class="m-icon--xsl on-left"
              :name="icon" />
      </template>
    </q-btn>
  </div>
</template>

<script>
import Icon from 'src/components/svg/icon';

export default {
  name: 'AppButton',
  components: { Icon },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    fullWidth: {
      type: Boolean,
      default: () => false
    },
    icon: {
      type: String
    },
  }
}
</script>

<style lang="scss">
@import '../../css/utilities/_all';

.m-button {
  .m-button--compact {
    height: pxToRem(34)!important;
  }

  .q-btn {
    height: pxToRem(46);
    border-radius: pxToRem(28);
    font-size: $font-rem--xsl;
    padding: 0 pxToRem(20);
    /* width: 100%; */

    .q-btn__wrapper:before {
      box-shadow: none;
    }

    .q-btn__content {
      display: flex;
      flex-direction: row-reverse;
    }

    .q-btn__content span {
      font-size: $font--xsl;
      font-weight: bold;
      font-style: normal;
    }
  }

  &--md {
    .q-btn {
      height: pxToRem(30);

      .q-btn__wrapper {
        min-height: pxToRem(2);
      }

      .q-btn__content span {
        font-size: $font--xsl;
        font-weight: bold;
        font-style: normal;
      }
    }
  }

  &--mdl {
    .q-btn {
      height: pxToRem(36);

      .q-btn__wrapper {
        min-height: pxToRem(4);
      }

      .q-btn__content span {
        font-size: $font--sm;
        font-weight: bold;
        font-style: normal;
      }
    }
  }
}
</style>
