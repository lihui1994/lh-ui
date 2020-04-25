<template>
  <div id="app">
<!--    <test-button></test-button>-->
<!--    <test-divider></test-divider>-->
<!--    <test-icon></test-icon>-->
<!--    <test-divider></test-divider>-->
<!--    <test-alert></test-alert>-->
<!--    <test-divider></test-divider>-->
<!--    <test-badge></test-badge>-->
<!--    <test-divider></test-divider>-->
<!--    <test-link></test-link>-->
<!--    <test-divider></test-divider>-->
    <!-- <test-card></test-card>
    <test-divider></test-divider> -->
<!--    <test-page-header></test-page-header>-->
<!--    <test-dialog></test-dialog>-->
<!--    <test-message></test-message>-->
<!--    <test-notification></test-notification>-->
<!--    <lh-tag>标签一</lh-tag>-->
<!--    <lh-tag closable style="margin-left: 10px;" type="success">标签二</lh-tag>-->
<!--    <lh-tag closable style="margin-left: 10px;" type="info">标签三</lh-tag>-->
<!--    <lh-tag closable style="margin-left: 10px;" type="warning">标签四</lh-tag>-->
<!--    <lh-tag closable style="margin-left: 10px;" type="danger">标签五</lh-tag>-->
<!--    <lh-tag style="margin-left: 10px;"-->
<!--      v-for="tag in tags"-->
<!--      :key="tag.name"-->
<!--      closable-->
<!--      :type="tag.type">-->
<!--      {{tag.name}}-->
<!--    </lh-tag>-->
    <test-progress></test-progress>
  </div>
</template>

<style lang="scss">
@import '../packages/theme-chalk/src/index.scss';
</style>

<script>

  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';
  import testAlert from './test/alert.vue';
  import testBadge from './test/badge.vue';
  import testLink from './test/link.vue';
  import testCard from './test/card.vue';
  import testDivider from './test/divider.vue';
  import testPageHeader from './test/pageHeader.vue';
  import testDialog from './test/dialog.vue';
  import testMessage from './test/message.vue';
  import testNotification from './test/notification.vue';
  import lhTag from '../packages/tag/index';
  import testProgress from './test/progress';

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
      testPageHeader,
      testDialog,
      testMessage,
      testNotification,
      lhTag,
      testProgress
    },
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
