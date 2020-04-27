import lhLoading from './src/loading';

lhLoading.install = function(Vue) {
  Vue.component(lhLoading.name, lhLoading);
}

export default lhLoading;