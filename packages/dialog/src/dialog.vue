<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="lh-dialog__wrapper">
      <div
       v-show="visible"
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
export default {
  name: 'lhDialog',
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
  mounted() {
    console.log(this.fullscreen)
  },
  methods: {
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
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
  }
}
</script>