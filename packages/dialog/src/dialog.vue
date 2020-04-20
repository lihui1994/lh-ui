<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div v-show="visible" class="lh-dialog__wrapper" @click.self="handleWrapperClick">
      <div
       :style="style"
       aria-modal="true"
       class="lh-dialog">
        <div class="lh-dialog__header">
          <slot name="title">
            <span class="lh-dialog__title">{{title}}</span>
          </slot>
          <button 
            type="button"
            class="lh-dialog__button"
            v-if="showClose"
            @click="handleClose"
          >
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="lh-dialog__body">
          <slot></slot>
        </div>
        <div class="lh-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '../../theme-chalk/src/dialog.scss';
</style>

<script>
import Popup from '../../../src/utils/popup';
export default {
  name: 'lhDialog',
  mixins: [Popup],
  props: {
    title: {
      props: String,
      default: ''
    },
    visible: {
      props: Boolean,
      default: false
    },
    width: String,
    top: {
      props: String,
      default: '15vh'
    },
    modal: {
      props: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: Function
    // fullscreen: {
    //   props: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      closed: false
    }
  },
  watch: {
    visible(val) {
      if(val) {
        this.closed = false;
        this.$emit('open');
      } else {
        if(!this.closed) this.$emit('close');
      }
    }
  },
  computed: {
    style() {
      let style = {};
      style.marginTop = this.top;
      if(this.width) {
        style.width = this.width;
      }
      return style;
    }
  },
  mounted() {
    // console.log(this.visible)
    // console.log(this.fullscreen)
  },
  methods: {
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
    handleWrapperClick() {
      if(!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if(typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide); 
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if(cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit('close');
        this.closed = true;
      }
    },
    afterEnter() {
      this.$emit('opened');
    },

    afterLeave() {
      this.$emit('closed');
    }
  },
  
}
</script>