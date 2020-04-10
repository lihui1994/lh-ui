<template>
  <div class="row">
    <div class='col'>
      <lh-badge :value="12" :max=10>
        <lh-button size="small">评论</lh-button>
      </lh-badge>
    </div>
    <div class="col">
      <lh-badge :value="3">
        <lh-button size="small">回复</lh-button>
      </lh-badge>
    </div>
    <div class="col">
      <lh-badge :value="1" type="primary">
        <lh-button size="small">评论</lh-button>
      </lh-badge>
    </div>
    <div class="col">
      <lh-badge :value="2" type="warning">
        <lh-button size="small">回复</lh-button>
      </lh-badge>
    </div>
    <div class="col">
      <lh-badge value="new">
        <lh-button size="small">评论</lh-button>
      </lh-badge>
    </div>
    <div class="col">
      <lh-badge value="hot">
        <lh-button size="small">回复</lh-button>
      </lh-badge>
    </div>
  </div>
</template>

<script>

  import LhBadge from '../../packages/badge';
  import LhButton from '../../packages/button';

  export default {
    name: 'testBadge',
    components: {LhBadge, LhButton }
  }
</script>

<style lang="scss" scoped>
.row{
  display: flex;
  margin-top: 20px;
}
.col{
  margin-left: 30px;
}
</style>