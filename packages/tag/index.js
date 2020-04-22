import lhTag from './src/tag.vue';

lhTag.install = function(Vue) {
  Vue.component(lhTag.name, lhTag);
}

export default lhTag;