<template>
  <div class="lh-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow' ">
    <div class="lh-card__header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="lh-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LhCard',

  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme-chalk/src/card.scss';
</style>