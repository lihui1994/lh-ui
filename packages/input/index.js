import lhInput from './src/main';

lhInput.install = function(Vue) {
  Vue.component(lhInput.name, lhInput);
}

export default lhInput;