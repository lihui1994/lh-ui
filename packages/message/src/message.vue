<template>
  <transition name="lh-message-fade" @after-leave="handleAfterLeave">
    <div
     :class="[
      'lh-message',
     ]"
     v-show="visible"
     @mouseenter="clearTimer"
     @mouseleave="startTimer"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="lh-message__content">{{message}}</p>
        <p v-else v-html="message" class="lh-message__content"></p>
      </slot> 
    </div>
  </transition>
</template>

<style lang="scss">
@import '../../theme-chalk/src/message.scss';
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      closed: false,
      duration: 3000,
      onClose: null,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false
    }
  },
  watch: {
    closed(newVal) {
      if(newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if(typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if(this.duration > 0) {
        this.timer = setTimeout(() => {
          if(!this.closed) {
            this.close();
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if(e.keyCode === 27) {
        if(!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.addEventListener('keydown', this.keydown);
  }
}
</script>