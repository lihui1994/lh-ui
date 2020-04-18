<template>
  <div class="row">
    <lh-button @click="handleMessage">测试message</lh-button>
    <!-- <lh-message></lh-message> -->
  </div>
</template>

<script>

  // import lhMessage from '../../packages/message';
  import LhButton from '../../packages/button';

  export default {
    name: 'testMessage',
    components: { LhButton },
    methods: {
      handleMessage() {
        this.$message("这是一条消息提示");
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