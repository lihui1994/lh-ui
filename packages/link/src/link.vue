<template>
  <a
  :class="[
    'lh-link',
    'lh-link--'+type,
    {
      'is-underline': !disable && underline,
      'is-disable': disable
    }
   ]"
   :href="!disable && href"
   @click="handleClick"
  >
    <span>
      <slot></slot>
      </span>
  </a>
</template>

<style lang="scss">
@import '../../theme-chalk/src/link.scss';
</style>

<script>
export default {
  name:'lhLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disable: {
      type: Boolean,
      default:false
    },
    href: String
  },
  methods: {
    handleClick(event) {
      if(!this.disable && !this.href) {
        this.$emit('click', event);
      }
    }
  }
}
</script>