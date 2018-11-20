import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import http from './http';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(ElementUI)

Vue.prototype.$http = http;

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
