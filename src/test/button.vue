<template>
  <div>
    <div class='row'>
      <lh-button class="col">默认按钮</lh-button>
      <lh-button class="col" type="primary">主要按钮</lh-button>
      <lh-button class="col" type="success">成功按钮</lh-button>
      <lh-button class="col" type="info">信息按钮</lh-button>
      <lh-button class="col" type="warning">警告按钮</lh-button>
    </div>
    <!-- <div class='row'>
      <lh-button type="danger">危险按钮</lh-button>
      <lh-button size="medium">中等按钮</lh-button>
      <lh-button size="small">小型按钮</lh-button>
      <lh-button size="mini">超小按钮</lh-button>
    </div>
    <div class='row'>
      <lh-button round>圆角按钮</lh-button>
      <lh-button type="primary" round>主要按钮</lh-button>
      <lh-button type="success" round>成功按钮</lh-button>
      <lh-button type="info" round>信息按钮</lh-button>
      <lh-button type="warning" round>警告按钮</lh-button>
      <lh-button type="danger" round>危险按钮</lh-button>
    </div> -->
  </div>
</template>

<script>

  import LhButton from '../../packages/button'

  export default {
    name: 'testButton',
    components: {LhButton}
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