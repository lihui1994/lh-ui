<template>
  <i :class="'el-icon' + name"></i>
</template>

<script>
export default {
  name: 'LhIcon',

  props: {
    name: String
  }
}
</script>

<style lang="scss">
  @import '../../theme-chalk/src/icon.scss';
</style>