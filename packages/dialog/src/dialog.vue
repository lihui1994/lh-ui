<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div v-show="visible" class="lh-dialog__wrapper">
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
    }
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
    visible(val, val2) {
      // console.log(val2)
      // console.log("val"+val)
      if(val) {
        // console.log("val"+val)
        this.closed = false;
        this.$emit('open');

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
    }
  },
  
}
</script>