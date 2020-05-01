<template>
  <div id="app">
    <lh-button @click="handleLoading" type="primary">loading</lh-button>
    <!-- <lh-button
      type="primary"
      @click="handleLoading2"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </lh-button> -->
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
    <div style="width: 400px;margin-left: 100px">
      <div class="top">
      <lh-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <lh-button>上左</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <lh-button>上边</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <lh-button>上右</lh-button>
      </lh-tooltip>
    </div>
    <div class="left">
      <lh-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <lh-button>左上</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <lh-button>左边</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <lh-button>左下</lh-button>
      </lh-tooltip>
    </div>

    <div class="right">
      <lh-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <lh-button>右上</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <lh-button>右边</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <lh-button>右下</lh-button>
      </lh-tooltip>
    </div>
    <div class="bottom">
      <lh-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <lh-button>下左</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <lh-button>下边</lh-button>
      </lh-tooltip>
      <lh-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <lh-button>下右</lh-button>
      </lh-tooltip>
    
    </div>
    </div>
    
    
    
    
    
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
  import testDivider from './test/divider.vue';
  import testPageHeader from './test/pageHeader.vue';
  import testDialog from './test/dialog.vue';
  import testMessage from './test/message.vue';
  import testNotification from './test/notification.vue';
  import lhTag from '../packages/tag/index';
  import testProgress from './test/progress';
  import lhLoading from '../packages/loading/index';
  import lhTooltip from '../packages/tooltip/index';

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
      testDivider,
      testPageHeader,
      testDialog,
      testMessage,
      testNotification,
      lhTag,
      testProgress,
      lhLoading,
      lhTooltip
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
        fullscreenLoading: false
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
.top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }
</style>
