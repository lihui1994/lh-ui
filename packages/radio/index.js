import LhRadio from './src/radio';

LhRadio.install = function(Vue) {
  Vue.component(LhRadio.name, LhRadio);
}

export default LhRadio;