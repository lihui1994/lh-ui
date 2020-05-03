<template>
  <lh-popover
    v-bind="$attrs"
    v-model="visible"
    triggle="click"
  >
    <div class="lh-popconfirm">
      <p class="lh-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="lh-popconfirm__icon"
          :style="{color: iconColor}"
        ></i>
        {{title}}
      </p>
      <div class="lh-popconfirm__action">
        <lh-button size="mini" :type="cancelButtonType" @click="cancel">{{cancelButtonText}}</lh-button>
        <lh-button size="mini" :type="confirmButtonType" @click="confirm">{{confirmButtonText}}</lh-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </lh-popover>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/popconfirm';
</style>

<script>
import LhPopover from '../../popover';
import LhButton from '../../button';

export default {
  name: 'lhPopconfirm',
  props: {
    title: {
      type: String
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LhPopover,
    LhButton
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
}
</script>