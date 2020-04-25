import LhProgress from './src/progress';

LhProgress.install = function (Vue) {
  Vue.component(LhProgress.name, LhProgress);
};

export default LhProgress;