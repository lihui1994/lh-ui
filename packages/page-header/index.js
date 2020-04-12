import lhPageHeader from './src/pageHeader.vue';

lhPageHeader.install = function(Vue) {
  Vue.component(lhPageHeader.name, lhPageHeader);
}

export default lhPageHeader;