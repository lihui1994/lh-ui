<template>
  <div class="lh-badge">
    <slot></slot>
    <transition>
      <sup v-show="content || content !== 0" class="lh-badge__content is-fixed" :class="['lh-badge__content-' + type, {'is-dot': isDot}]" v-text="content"></sup>
    </transition>
  </div>
</template>


<style lang="scss">
  @import '../../theme-chalk/src/badge.scss';
</style>

<script>
export default {
  name: 'lhBadge',
  props: {
    value: [String, Number],
    type: {
      props: String,
      default: ''
    },
    max: Number,
    isDot: Boolean
  },
  computed: {
    content() {
      const value = this.value;
      if(typeof value === 'number' && value > this.max) {
        return this.max + '+';
      }
      return value;
    }
  }
}
</script>