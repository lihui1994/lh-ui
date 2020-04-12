<template>
  <div class="row">
    <lh-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <lh-link style="float: right" type="primary">操作按钮</lh-link>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </lh-card>
  </div>
</template>

<script>

  import LhCard from '../../packages/card';
  import LhLink from '../../packages/link';

  export default {
    name: 'testCard',
    components: {LhCard, LhLink}
  }
</script>

<style lang="scss" scoped>
.row{
  margin-top: 20px;
}
.col{
  margin-left: 10px;
}
</style>