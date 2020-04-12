<template>
  <div class="row">
    <lh-divider></lh-divider>
  </div>
</template>

<script>

  import LhDivider from '../../packages/divider';

  export default {
    name: 'testDivider',
    components: {LhDivider}
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