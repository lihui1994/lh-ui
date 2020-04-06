import LhButton from './src/button';

LhButton.install = function(Vue) {
  Vue.component(LhButton.name, LhButton);
}

export default LhButton;