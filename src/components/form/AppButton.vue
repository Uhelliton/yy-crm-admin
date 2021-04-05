<template>
  <div class="m-button">
    <q-btn color="primary"
           class="px-5 btn"
           :label="label"
           v-bind="{ ...$attrs, icon: undefined }"
           v-on="$listeners">

      <slot v-for="slot in Object.keys($slots)"
            :name="slot"
            :slot="slot"/>

      <template v-slot:default v-if="icon">
        <i>cion aqu</i>
      </template>
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      default: () => ''
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/app/theme/scss/global/utilities/all';

.q-btn {
  font-weight: 400;
  padding: 0 2rem;
  border-radius: 0.4rem;

  .q-btn__wrapper {
    .justify-center {
    }

    &:before {
      box-shadow: none !important;
    }
  }

  .q-btn__content {
  }

  .q-btn__content span {
    font-weight: normal;
    text-transform: capitalize;
    font-style: normal;
  }
}
</style>
