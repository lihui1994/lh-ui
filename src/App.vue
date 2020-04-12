<template>
  <div id="app">
    <test-button></test-button>
    <test-icon></test-icon>
    <test-alert></test-alert>
    <test-badge></test-badge>
    <test-link></test-link>
    <test-card></test-card>
  </div>
</template>

<script>

  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';
  import testAlert from './test/alert.vue';
  import testBadge from './test/badge.vue';
  import testLink from './test/link.vue';
  import testCard from './test/card.vue';

  export default {
    name: 'App',
    components: {testButton, testIcon, testAlert, testBadge, testLink, testCard}
  }
</script>

<style lang="scss">
</style>
