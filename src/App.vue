<template>
  <div id="app">
    <test-button></test-button>
  </div>
</template>

<script>

  import testButton from './test/button.vue'

  export default {
    name: 'App',
    components: {testButton}
  }
</script>

<style lang="scss">
</style>
