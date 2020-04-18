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
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      opened: false,
      closed: false
    }
  },

  watch: {
    visible(val) {
      if(val) {
        if(this._opening) return;
        this.closed = false;
        Vue.nextTick(() => {
          this.open();
        })
      } else {
        this.close();
      }
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  beforeDestroy() {
    
  },

  methods: {
    // 打开遮罩
    open(options) {
      const props = merge({}, this.$props || this, options);
      this.doOpen(props);
    },


    doOpen(props) {
      if(this.$isServer) return;
      if(this.willOpen && !this.willOpen()) return;
      if(this.opened) return;

      this._opening = true

      const dom = this.$el;
      const modal = props.modal;
      const zIndex = props.zIndex;
      if(zIndex) {
        PopupManager.zIndex = zIndex;
      }

      if(modal) {
        if(this._closing) {
          PopupManager.closeModal(this._popupId);
          this._closing = false;
        }
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? undefined : DOMError, props.modalClass, props.modalFade);
      }

      dom.style.zIndex = PopupManager.nextZIndex();
      this.opened = true;
      
      this.onOpen && this.onOpen();
      this.doAfterOpen();
    },

    doAfterOpen() {
      this._opening = false
    },

    close() {
      if(this.willClose && this.willClose()) return;
      this.doClose();
    },

    doClose() {
      this._closing = true;
      this.onClose && this.onClose();

      this.opened = false;
      this.doAfterClose();
    },

    doAfterClose() {
      PopupManager.closeModal(this._popupId);
      this._closing = false;
    }
  }
}

export {
  PopupManager
}