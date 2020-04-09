import LhAlert from './src/alert';

LhAlert.install = function(Vue) {
  Vue.component(LhAlert.name, LhAlert);
}

export default LhAlert;