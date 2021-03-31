<template>
  <div class="m-sliderInput">
    <label class="m-input_label" :for="forId">
      {{ label }}
      <span class="m-input_label_boxIcon" v-if="this.$slots.labelInfo">
        <slot name="labelInfo"></slot>
      </span>
    </label>
    <div class="m-sliderInput_inner"
         :class="{'m-sliderInput_inner--outline': outline}">
      <div class="m-sliderInput_value">
        <slot name="resultInfo">{{ slider }} %</slot>
      </div>
      <q-slider label
                v-bind:name="forId"
                v-model="slider"
                @input="setValue"
                :min="min"
                :max="max"
                :step="step"
                v-bind="{ ...$attrs, label: undefined }"
                v-on="$listeners">
      </q-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSliderInput",
  data () {
    return {
      slider: 0
    }
  },
  created () {
    this.slider = this.value
  },
  watch: {
    slider (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.slider = parseFloat(value)
      this.$emit('input', value)
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: () => '',
    },
    min: {
      type: Number,
      default: () => 0,
    },
    max: {
      type: Number,
      default: () => 0,
    },
    step: {
      type: Number,
      default: () => 0,
    },
    label: {
      default: () => ''
    },
    forId: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  methods: {
    setValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
@import '../../css/utilities/_all';

.m-sliderInput {
  overflow: hidden;

  &_inner {
    padding: 0 pxToRem(26);
    position: relative;

    &--outline {
      border: pxToRem(1) solid $color-gris-06;
      border-radius: pxToRem(50);
    }

    .q-slider {
      padding: pxToRem(28) 0;
      margin-left: pxToRem(50);
      width: calc(100% - #{pxToRem(50)});
    }
  }

  &_value {
    color: $color-gray;
    position: absolute;
    font-size: $font-rem--xs;
    top: 50%;
    margin-top: pxToRem(-10);
    max-width: pxToRem(54);
    overflow: hidden;
    transform: translateX(#{ pxToRem(-10) });
    text-align: center;
    text-overflow: ellipsis;
    will-change: left;
    white-space: nowrap;
    width: 100%;
  }

  &:not(.q-field--dense) {
    .q-field__inner {
      height: pxToRem(50);
    }
  }

  &_label {
    font-size: $font--xsl;
    color:  $color-dark-02;
    font-weight: bold;

    &_boxIcon {
      align-items: center;
      display: flex;

      [class*='m-icon'] {
        margin-left: pxToRem(6);
      }
    }
  }

  &--bgWhite {
    .m-sliderInput_inner {
      background-color: $color-white;
    }
  }
}
</style>
