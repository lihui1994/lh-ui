<template>
  <transition name="lh-loading-fade" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="lh-loading-mask"
      :style="{backgroundColor:　background || ''}"
      :class="[customClass, {'is-fullscreen': fullscreen}]"
    >
      <div class="lh-loading-snipper">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50"></svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="lh-loading-text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/loading.scss';
</style>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      visible: false,
      fullscreen: true,
      visible: false,
      customClass: ''
    }
  },
  methods: {
    handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText(text) {
      this.text = text;
    }
  }
}
</script>