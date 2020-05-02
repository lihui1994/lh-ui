<template>
  <div style="width: 400px;margin-left: 300px">
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
</template>
<style scoped>
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
<script>
import lhButton from '../../packages/button';
import lhTooltip from '../../packages/tooltip';
export default {
  components: {
    lhButton,
    lhTooltip
  }
}
</script>