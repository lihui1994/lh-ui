import Vue from 'vue';
import Main from './message.vue';
import { PopupManager } from '../../../src/utils/popup';
import { isVNode } from '../../../src/utils/vdom';
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
  if(Vue.prototype.$isServer) return;
  options = options || {};
  if(typeof options === 'string') {
    options = {
      message: options
    }
  }
  // console.log(options)

  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    Message.close(id, userOnClose);
  }

  instance = new MessageConstructor({
    data: options
  })

  instance.id = id;
  // instance.type = options.type;
  if(isVNode(instance.message)) {
    instance.$slot.default = [instance.message];
    instance.message = null;
  }

  console.log(instance)

  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });

  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  instance.$el.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
  return instance;
};


Message.close = function(id, userOnClose) {
  let len = instances.length;
  let index = -1;
  let removeHeight;
  for(let i = 0; i < len; i++) {
    if(id === instances[i].id) {
      removeHeight = instances[i].$el.offsetHeight;
      index = i;
      if(typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if(len <= 1 || index === -1 || index > instances.length - 1) return;
  for(let i = index; i < len - 1; i++) {
    let dom = instances[i].$el;
    dom.style['top'] = parseInt(dom.style['top'], 10) - removeHeight - 16 + 'px';
  }
}

export default Message;