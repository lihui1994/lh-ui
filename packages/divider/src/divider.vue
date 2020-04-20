<template functional>
  <div v-bind="data.attrs" class="lh-divider" :class="'lh-divider--'+props.direction">
    <div v-if="slots().default && props.direction !== 'vertical'" class="lh-divider__text" :class="'is-' + props.contentPosition">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../theme-chalk/src/divider.scss';
</style>

<script>
export default {
  name: 'lhDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertial'].indexOf(val) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  }
}
</script>