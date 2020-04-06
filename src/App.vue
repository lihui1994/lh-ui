<template>
  <div id="app">
    <test-button></test-button>
    <test-icon></test-icon>
  </div>
</template>

<script>

  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';

  export default {
    name: 'App',
    components: {testButton, testIcon}
  }
</script>

<style lang="scss">
</style>
