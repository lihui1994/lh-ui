<template>
  <transition name="lh-alert-fade">
    <div class="lh-alert"
     :class="[typeClass, 'is-'+effect, center ? 'is-center': '']"
     v-show="visible"
    >
      <div class="lh-alert__content">
        <span class="lh-alert__title">
          <slot name="title">{{title}}</slot>
        </span>
        <i class="lh-alert__closebtn" :class="{'el-icon-close': closeText === ''}" @click="close()"></i>
      </div>
    </div>
  </transition>
</template>


<style lang="scss">
@import '../../theme-chalk/src/alert.scss';

</style>

<script>

export default {
  name: 'LhAlert',
  props: {
    title:{
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    effect: {
      type: String,
      default: 'light'
    },
    center: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      visible: true
    }
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  },

  computed: {
    typeClass() {
      return `lh-alert--${this.type}`
    }
  }
}
</script>