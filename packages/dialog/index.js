import lhDialog from './src/dialog.vue';

lhDialog.install = function(Vue) {
  Vue.component(lhDialog.name, lhDialog);
}

export default lhDialog;

