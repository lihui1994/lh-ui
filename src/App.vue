<template>
  <div id="app">
    <!-- <lh-divider content-position="left">loading</lh-divider>
    <lh-button @click="handleLoading" type="primary">loading</lh-button>
    <lh-button
      type="primary"
      @click="handleLoading2"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </lh-button>
    <lh-divider content-position="left">button</lh-divider>
    <test-button></test-button>
    <lh-divider content-position="left">icon</lh-divider>
    <test-icon></test-icon>
    <lh-divider content-position="left">alert</lh-divider>
    <test-alert></test-alert>
    <lh-divider content-position="left">badge</lh-divider>
    <test-badge></test-badge>
    <lh-divider content-position="left">link</lh-divider>
    <test-link></test-link>
    <lh-divider content-position="left">card</lh-divider>
    <test-card></test-card>
    <lh-divider content-position="left">page-header</lh-divider>
    <test-page-header></test-page-header>
    <lh-divider content-position="left">dialog</lh-divider>
    <test-dialog></test-dialog>
    <lh-divider content-position="left">message</lh-divider>
    <test-message></test-message>
    <lh-divider content-position="left">notification</lh-divider>
    <test-notification></test-notification>
    <lh-divider content-position="left">tag</lh-divider>
    <lh-tag>标签一</lh-tag>
    <lh-tag closable style="margin-left: 10px;" type="success">标签二</lh-tag>
    <lh-tag closable style="margin-left: 10px;" type="info">标签三</lh-tag>
    <lh-tag closable style="margin-left: 10px;" type="warning">标签四</lh-tag>
    <lh-tag closable style="margin-left: 10px;" type="danger">标签五</lh-tag>
    <lh-tag style="margin-left: 10px;"
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
        {{tag.name}}
    </lh-tag>
    <lh-divider content-position="left">progress</lh-divider>
    <test-progress></test-progress>
    <lh-divider content-position="left">tooltip</lh-divider>
    <test-tooltip></test-tooltip>
    <lh-divider content-position="left">popover</lh-divider>
    <test-popover></test-popover>
    <lh-divider content-position="left">popconfirm</lh-divider>
    <lh-popconfirm title="这是一段内容确定删除吗？">
      <lh-button slot="reference">删除</lh-button>
    </lh-popconfirm>
    <lh-divider content-position="left">switch</lh-divider>
    <lh-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </lh-switch>
    <lh-divider content-position="left"></lh-divider> -->
    <!-- <test-input></test-input> -->
    <lh-divider content-position="left">radio</lh-divider>
    <lh-radio v-model="radio" label="1">备选项</lh-radio>
    <lh-radio v-model="radio" label="2">备选项</lh-radio>
    <lh-radio-group v-model="radio4" size="mini">
      <lh-radio label="上海"></lh-radio>
      <lh-radio label="北京"></lh-radio>
      <lh-radio label="广州"></lh-radio>
      <lh-radio label="深圳"></lh-radio>
    </lh-radio-group>
    <lh-divider content-position="left">checkbox</lh-divider>
    <lh-checkbox v-model="checked">备选项</lh-checkbox>
  </div>
</template>

<style lang="scss">
@import '../packages/theme-chalk/src/index.scss';
</style>

<script>
  import LhButton from '../packages/button/index';
  import testButton from './test/button.vue';
  import testIcon from './test/icon.vue';
  import testAlert from './test/alert.vue';
  import testBadge from './test/badge.vue';
  import testLink from './test/link.vue';
  import testCard from './test/card.vue';
  import lhDivider from '../packages/divider';
  import testPageHeader from './test/pageHeader.vue';
  import testDialog from './test/dialog.vue';
  import testMessage from './test/message.vue';
  import testNotification from './test/notification.vue';
  import lhTag from '../packages/tag/index';
  import testProgress from './test/progress';
  import lhLoading from '../packages/loading/index';
  import testTooltip from './test/tooltip';
  import testPopover from './test/popover';
  import lhPopconfirm from '../packages/popconfirm/index';
  import lhSwitch from '../packages/switch/index';
  // import testInput from './test/input';
  import lhRadio from '../packages/radio/index';
  import lhRadioGroup from '../packages/radio-group/index';
  import lhCheckbox from '../packages/checkbox/index';

  export default {
    name: 'App',
    components: {
      LhButton,
      testButton,
      testIcon,
      testAlert,
      testBadge,
      testLink,
      testCard,
      lhDivider,
      testPageHeader,
      testDialog,
      testMessage,
      testNotification,
      lhTag,
      testProgress,
      lhLoading,
      testTooltip,
      testPopover,
      lhPopconfirm,
      lhSwitch,
      // testInput,
      lhRadio,
      lhRadioGroup,
      lhCheckbox
    },
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        fullscreenLoading: false,
        value: true,
        radio: '1',
        radio4: '上海',
        handleLoading2: false,
        checked: true
      }
    },
    methods: {
      handleLoading() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'lh-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
    }
  }
</script>

<style lang="scss">

</style>
