<template>
  <transition name="lh-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="lh-loading-mask"
      :style="{backgroundColor:　background || ''}"
    >
      <div class="lh-loading-snipper">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50"></svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="lh-loading-text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import '../../theme-chalk/src/loading.scss';
</style>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      visible: false
    }
  }
}
</script>