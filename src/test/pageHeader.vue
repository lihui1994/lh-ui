<template>
  <div class="row">
    <!-- <lh-page-header></lh-page-header> -->
    <lh-page-header @back="goBack" title="返回" content="详情页面"></lh-page-header>
  </div>
</template>

<script>

  import LhPageHeader from '../../packages/page-header';

  export default {
    name: 'testPageHeader',
    components: { LhPageHeader },
    methods: {
      goBack() {
        alert('go back');
      }
    }
  }
</script>

<style lang="scss" scoped>
.row{
  // display: flex;
  margin-top: 20px;
}
.col{
  margin-left: 20px;
}
</style>