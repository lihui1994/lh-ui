<template>
  <div>
    <div class='row'>
      <lh-input></lh-input>
    </div>
  </div>
</template>

<script>

  import LhInput from '../../packages/input'

  export default {
    name: 'testInput',
    components: {LhInput}
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