import Vue from 'vue';
import PopupManager from './popup-manager.js';
import { getStyle, addClass, removeClass, hasClass } from '../dom.js';
import merge from '../merge';

let idSeed = 1;

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },
    modalAppendToBody: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    visible(val) {
      if(val) {
        Vue.nextTick(() => {
          this.open();
        })
      }
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  beforeDestroy() {
    // PopupManager.dere
  },

  methods: {
    // 打开遮罩
    open(options) {
      const props = merge({}, this.$props || this, options);
      this.doOpen(props);
    },

    doOpen(props) {
      // alert(1)
      const modal = props.modal;
      if(modal) {
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? undefined : DOMError, props.modalClass, props.modalFade);
      }
    }
  }
}