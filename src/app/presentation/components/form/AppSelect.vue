<template>
  <div class="m-select">
    <label class="m-select__label" :for="forId">
      {{ label }}
    </label>
    <q-select
      v-bind:value="value"
      outlined
      :hide-dropdown-icon="true"
      v-bind:name="forId"
      v-bind="{ ...$attrs, label: undefined }"
      v-on="$listeners">
      <template #append>
          <span >
             <Icon icon="chevron-down" />
          </span>
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            Nenhum resultado
          </q-item-section>
        </q-item>
      </template>
      <slot v-for="slot in Object.keys($slots)"
            :name="slot"
            :slot="slot">
      </slot>
    </q-select>
  </div>
</template>

<script>
import Icon from '../icon/Icon'
export default {
  name: 'AppSelect',
  components: { Icon },
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: () => ''
    },
    label: {
      default: () => ''
    },
    forId: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/app/theme/scss/global/utilities/all';

.m-select {
  .material-icons {
    display: none;
  }
  &.m-select__page{
    &:not(.q-field--dense) {
      .q-field__inner {
        .q-field__control {
          height: 40px!important;
        }
      }
    }

    .q-field--outlined .q-field__control:before {
      height: 40px!important;
    }
  }

  &:not(.q-field--dense) {
    .q-field__inner {
      .q-field__control {
        height: 50px;
      }
    }
  }

  .q-field--outlined .q-field__control:before {
    height: 50px;
    border: 1px solid #abacb3;
  }

  &__label {
    background: white;
    position: relative;

    &_ {
      align-items: center;
      display: flex;

      [class*='m-icon'] {
        margin-left: pxToRem(6);
      }
    }
  }

  .q-field__native {
    /* font-weight: 400;
     color: #495057;
     background-color: #fff;
     background-repeat: no-repeat;
     background-position: right .75rem center;
     background-size: 16px 12px;
     border-right: 1px solid #ced4da;
     border-top: 1px solid #ced4da;
     border-bottom: 1px solid #ced4da;
     border-radius: .25rem;
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;*/
  }

}
</style>
