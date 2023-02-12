import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index.js'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./App.css"

Vue.config.productionTip = false

Vue.use(VueRouter).use(ElementUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
