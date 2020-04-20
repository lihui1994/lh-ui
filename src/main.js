import Vue from 'vue'
import App from './App.vue'
import Message from '../packages/message/index.js';
import Notification from '../packages/notification/index.js';


Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

new Vue({
  render: h => h(App),
}).$mount('#app')
