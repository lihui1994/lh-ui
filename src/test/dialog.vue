<template>
  <div class="row">
    <lh-dialog title="提示" :visible="visible" width="30%" fullscreen="true">
      <span slot="footer">
        <lh-button @click="centerDialogVisible = false">取 消</lh-button>
        <lh-button type="primary">确 定</lh-button>
      </span>
    </lh-dialog>
    <button type="primary" @click="handleClick">dialog</button>
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