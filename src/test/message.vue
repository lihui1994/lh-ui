<template>
  <div class="row">
    <lh-button @click="handleMessage">测试message</lh-button>
    <lh-button @click="handleMessage2">测试成功message</lh-button>
    <lh-button @click="handleMessage3">测试warning</lh-button>
    <lh-button @click="handleMessage4">测试error</lh-button>
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
      },
      handleMessage2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      handleMessage3() {
        this.$message({
          message: '恭喜你，这是一条warning消息',
          type: 'warning',
          showClose: true,
        });
      },
      handleMessage4() {
        this.$message({
          message: '恭喜你，这是一条error消息',
          type: 'error'
        });
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