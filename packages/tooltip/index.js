import ToolTip from './src/main';

ToolTip.install = function(Vue) {
  Vue.component(ToolTip.name, ToolTip)
};

export default ToolTip;