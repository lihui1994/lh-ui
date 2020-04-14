import Vue from 'vue';
import { addClass, removeClass } from '../dom';

let hasModal = false;
let hadInitZIndex = false;
let zIndex;

const getModal = function() {
  if(Vue.prototype.$isServer) return;

  let modalDom = PopupManager.modalDom;
  if(modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
    })

    modalDom.addEventListener('click', function() {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    })
  }
  return modalDom;
}

const instance = {};

const PopupManager = {

  register: function(id) {
    if(id) {
      instance[id] = null;
      delete instance[id];
    }
  },

  nextZIndex: function() {
    return PopupManager.zIndex++
  },


  modalStack: [],

  doOnModalClick: function() {

  },

  openModal: function(id, zIndex, dom, modalClass, modalFade) {
    if(Vue.prototype.$isServer) return;
    console.log(id)
    console.log(zIndex)
    if(!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    const modalStack = this.modalStack;

    for(let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if(item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'v-modal');
    if(this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter')
    }

    if(modalClass) {
      let classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(item => addClass(modalDom, item));
    }

    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter');
    }, 200)

    if(dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if(zIndex) {
      modalDom.style.zIndex = zIndex;
    }

    modalDom.tabIndex = 0;
    modalDom.style.display = '';
    // console.log(modalDom)

    this.modalStack.push({id: id, zIndex, zIndex, modalClass: modalClass})
  }
}

export default PopupManager;