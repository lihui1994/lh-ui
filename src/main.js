import Vue from 'vue'
import App from './App.vue'
import Message from '../packages/message/index.js';
import Notification from '../packages/notification/index.js';
import Loading from '../packages/loading/index';


Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;

Vue.use(Loading.directive);

new Vue({
  render: h => h(App),
}).$mount('#app')
