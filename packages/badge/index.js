import LhBadge from './src/badge.vue';

LhBadge.install = function(Vue) {
  Vue.component(LhBadge.name, LhBadge);
}

export default LhBadge