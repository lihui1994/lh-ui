<template>
  <div>
    <div class='row'>
      <span>
        <i class="el-icon-edit"></i>
      </span>
      <span>
        <i class="el-icon-share"></i>
      </span>
      <span>
        <i class="el-icon-delete"></i>
      </span>
    </div>
  </div>
</template>

<script>

  import LhIcon from '../../packages/icon'

  export default {
    name: 'testIcon',
    components: {LhIcon}
  }
</script>

<style lang="scss" scoped>
.row{
  margin-top: 20px;
  span{
    padding: 10px;
  }
}
</style>