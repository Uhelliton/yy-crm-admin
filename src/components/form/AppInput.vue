<template>
  <div class="m-input">
    <label class="m-input__label" :for="forId">
      {{ label }}
    </label>
    <q-input  v-bind:value="value"
              ref="input"
              outlined
              v-bind:name="forId"
              v-bind="{ ...$attrs, label: undefined }"
              v-on="$listeners">

              <slot v-for="slot in Object.keys($slots)"
                    :name="slot"
                    :slot="slot" />
              <template v-slot:append v-if="icon">
                <Icon :icon="icon" />
              </template>
    </q-input>
  </div>
</template>

<script>

import Icon from '../icon/Icon'

export default {
  name: 'AppInput',
  components: { Icon },
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      default: () => ''
    },
    forId: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    info: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/app/theme/scss/global/utilities/all';

.m-input {
  &__label {
    background: white;
    bottom: -10px;
    left: 10px;
    position: relative;
    z-index: 10;
    padding-left: pxToEm(10);
    padding-right: pxToEm(10);

    &_ {
      align-items: center;
      display: flex;

      [class*='m-icon'] {
        margin-left: pxToRem(6);
      }
    }
  }

  .q-field__control {
    width: 100%;
    // height: calc(2em + .94rem + 6px);
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: .25rem;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
  }

  .q-field--outlined .q-field__control:before {
    border: 1px solid rgba(0, 0, 0, 0.24);
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .q-icon {
    display: none;
  }
}
</style>
