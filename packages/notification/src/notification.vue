<template>
  <transition name="lh-notification-fade">
    <div
      :class="['lh-notification', horizontalClass]"
      v-show="visible"
      :style="positionStyle"
    >
      <i class="lh-notification__icon" :class="[typeClass, iconClass]" v-if="type || iconClass"></i>
      <div class="lh-notification__group" :class="{'is-with-icon': typeClass || iconClass}">
        <h2 class="lh-notification__title" v-text="title"></h2>
        <div class="lh-notification__content" v-show="message">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{message}}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div class="lh-notification__closeBtn el-icon-close" v-if="showClose" @click.stop="close"></div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '../../theme-chalk/src/notification.scss';
</style>

<script>

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  name: 'notification',
  data() {
    return {
      visible: false,
      duration: 4500,
      title: '',
      message: '',
      dangerouslyUseHTMLString: false,
      verticalOffset: 0,
      position: 'top-right',
      closed: false,
      onClose: null,
      timer: null,
      showClose: true,
      type: '',
      iconClass: ''
    }
  },
  watch: {
    closed(newVal) {
      if(newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destoryElement);
      }
    }
  },
  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? `el-icon-${typeMap[this.type]}` : '';
    },
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left'
    },
    verticalProperty() {
      return /^top-/.test(this.position)? 'top': 'bottom';
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    destoryElement() {
      this.$el.removeEventListener('transitionend', this.destoryElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if(typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    startTimer() {
      if(this.duration > 0) {
        this.timer = setTimeout(() => {
          if(!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    if(this.duration > 0) {
        console.log(this.duration)

      this.timer = setTimeout(() => {
        if(!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  }
}
</script>