import LhMessage from './src/message.vue';

LhMessage.install = function(Vue) {
  Vue.component(LhMessage.name, LhMessage);
}

export default LhMessage;