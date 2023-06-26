import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index.js'
import VueRouter from 'vue-router'
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./App.css"
import { productList } from './api'
Vue.config.productionTip = false
Vue.use(VueRouter).use(ElementUI);
Vue.prototype.$hostURL = 'http://localhost:8081'
import qs from 'qs'      //引入qs
Vue.prototype.$qs = qs
const user = JSON.parse(localStorage.getItem('user'))
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
