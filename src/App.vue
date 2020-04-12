<template>
  <div id="app">
    <test-button></test-button>
    <test-divider></test-divider>
    <test-icon></test-icon>
    <test-divider></test-divider>
    <test-alert></test-alert>
    <test-divider></test-divider>
    <test-badge></test-badge>
    <test-divider></test-divider>
    <test-link></test-link>
    <test-divider></test-divider>
    <!-- <test-card></test-card>
    <test-divider></test-divider> -->
    <test-page-header></test-page-header>
  </div>
</template>

<script>

  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';
  import testAlert from './test/alert.vue';
  import testBadge from './test/badge.vue';
  import testLink from './test/link.vue';
  import testCard from './test/card.vue';
  import testDivider from './test/divider.vue';
  import testPageHeader from './test/pageHeader.vue';

  export default {
    name: 'App',
    components: {
      testButton,
      testIcon,
      testAlert,
      testBadge,
      testLink,
      testCard,
      testDivider,
      testPageHeader
    }
  }
</script>

<style lang="scss">
</style>
