<template>
  <transition name="lh-message-fade" @after-leave="handleAfterLeave">
    <div
     :class="[
      'lh-message',
      type && !iconClass ? `lh-message--${type}` : '',
     ]"
     v-show="visible"
     @mouseenter="clearTimer"
     @mouseleave="startTimer"
     :style="positionStyle"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i v-else :class="typeClass"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="lh-message__content">{{message}}</p>
        <p v-else v-html="message" class="lh-message__content"></p>
      </slot> 
      <i v-if="showClose" class="lh-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<style lang="scss">
@import '../../theme-chalk/src/message.scss';
</style>

<script>

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  data() {
    return {
      visible: false,
      closed: false,
      duration: 3000,
      onClose: null,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      verticalOffset: 20,
      iconClass: '',
      type: 'info',
      iconClass: '',
      showClose: false
    }
  },
  computed: {
    typeClass() {
      return this.type && !this.iconClass ? `lh-message__icon el-icon-${typeMap[this.type]}` : '';
    },
    positionStyle() {
      return {
        'top': `${this.verticalOffset}px`
      }
    }
  },
  watch: {
    closed(newVal) {
      if(newVal) {
        this.visible = false;
      }
    }
  },
  mounted() {
    console.log(this.type);
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
    },
    close() {
      this.closed = true;
      if(typeof this.onClose === 'function') {
        this.onClose(this);
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