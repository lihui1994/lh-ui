<template>
  <button
   class="lh-button"
   @click="handleClick"
   :class="[
    type ? 'lh-button--' + type : '',
    size ? 'lh-button--' + size : '',
    {
      'is-round': round,
      'is-loading': loading
    }
   ]"
   >
   <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>


<style lang="scss">
@import '../../theme-chalk/src/button.scss';

</style>

<script>

export default {
  name: 'LhButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    round: Boolean,
    loading: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>