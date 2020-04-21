<template>
  <div class="row">
    <lh-button @click="handleNotification">测试Notification</lh-button>
    <lh-button @click="handleNotification2">测试Notification</lh-button>
    <lh-button @click="handleNotification3">测试Notification</lh-button>
    <lh-button @click="handleNotification4">测试Notification</lh-button>
  </div>
</template>

<script>

  // import lhMessage from '../../packages/message';
  import LhButton from '../../packages/button';

  export default {
    name: 'testNotification',
    components: { LhButton },
    methods: {
      handleNotification() {
         this.$notify({
          title: '提示',
          message: '这是一条Notification提示',
          type: 'success'
        });
      },
      handleNotification2() {
         this.$notify({
          title: '提示',
          message: '这是一条Notification提示',
          type: 'error'
        });
      },
      handleNotification3() {
         this.$notify({
          title: '提示',
          message: '这是一条Notification提示',
          type: 'warning'
        });
      },
      handleNotification4() {
         this.$notify({
          title: '提示',
          message: '这是一条Notification提示',
          type: 'info'
        });
      },
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