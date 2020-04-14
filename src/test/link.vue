<template>
  <div class="row">
    <div>
      <lh-link class="col" href="https://element.eleme.io" target="_blank">默认链接</lh-link>
      <lh-link class="col" type="primary">主要链接</lh-link>
      <lh-link class="col" type="success">成功链接</lh-link>
      <lh-link class="col" type="warning">警告链接</lh-link>
      <lh-link class="col" type="danger">危险链接</lh-link>
      <lh-link class="col" type="info">信息链接</lh-link>
      <lh-link @click="handleClick" class="col" type="info">信息链接</lh-link>
    </div>
    <div>
      <lh-link @click="handleClick" class="col" type="primary" disable>主要链接</lh-link>
      <lh-link class="col" type="success" disable>成功链接</lh-link>
      <lh-link class="col" type="warning" disable>警告链接</lh-link>
      <lh-link class="col" type="danger" disable>危险链接</lh-link>
      <lh-link class="col" type="info" disable>信息链接</lh-link>
      <lh-link class="col" type="info" disable>信息链接</lh-link>
    </div>
  </div>
</template>

<script>

  import LhLink from '../../packages/link';

  export default {
    name: 'testLink',
    components: { LhLink },
    methods: {
      handleClick() {
        // alert(1)
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