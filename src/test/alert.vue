<template>
  <div>
    <div class='row'>
      <lh-alert title="成功提示的文案" type="success"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="消息提示的文案" type="info"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="警告提示的文案" type="warning"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="错误提示的文案" type="danger"></lh-alert>
    </div>
    <!-- <div class='row'>
      <lh-alert title="成功提示的文案" type="success" effect="dark"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="消息提示的文案" type="info" effect="dark"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="警告提示的文案" type="warning" effect="dark"></lh-alert>
    </div>
    <div class="row">
      <lh-alert title="错误提示的文案" type="danger" effect="dark" center></lh-alert>
    </div> -->
  </div>
</template>

<script>

  import LhAlert from '../../packages/alert'

  export default {
    name: 'testAlert',
    components: {LhAlert}
  }
</script>

<style lang="scss" scoped>
.row{
  margin-top: 20px;
}
</style>