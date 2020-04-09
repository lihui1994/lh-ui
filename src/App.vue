<template>
  <div id="app">
    <test-button></test-button>
    <test-icon></test-icon>
    <test-alert></test-alert>
  </div>
</template>

<script>

  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';
  import testAlert from './test/alert.vue';

  export default {
    name: 'App',
    components: {testButton, testIcon, testAlert}
  }
</script>

<style lang="scss">
</style>
