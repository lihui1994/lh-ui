<template>
  <div class="lh-page-header" @click="$emit('back')">
    <div class="lh-page-header__left">
      <i class="el-icon-back"></i>
      <div class="lh-page-header__title">
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <div class="lh-page-header__content">
      <slot name="content">{{content}}</slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../theme-chalk/src/page-header.scss';
</style>

<script>
export default {
  name: 'lhPageHeader',
  props: {
    title: String,
    content: String
  }
}
</script>