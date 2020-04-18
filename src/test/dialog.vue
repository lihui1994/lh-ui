<template>
  <div class="row">
    <lh-dialog title="提示" :visible.sync="visible" width="30%" fullscreen="true" :before-close="handleModalClose">
      <span slot="footer">
        <lh-button @click="handleClose">取 消</lh-button>
        <lh-button type="primary">确 定</lh-button>
      </span>
    </lh-dialog>
    <lh-button type="primary" @click="handleClick">dialog</lh-button>
  </div>
</template>

<script>

  import LhDialog from '../../packages/dialog';
  import LhButton from '../../packages/button';

  export default {
    name: 'testDialog',
    components: {LhDialog, LhButton},
    data() {
      return {
        centerDialogVisible: false,
        visible: false
      }
    },
    methods: {
      handleClick: function() {
        this.visible = true;
      },

      handleClose(done) {
        this.visible = false
      },
      handleModalClose(done) {
        done();
      }
    }
  }
</script>

<style lang="scss" scoped>
.row{
  margin-top: 20px;
}
.col{
  margin-left: 10px;
}
.lh-dialog__footer button:first-child{
  margin-right: 10px;
}
.lh-dialog__footer button:last-child{
  margin-left: 10px;
}
</style>