import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index.js'
import VueRouter from 'vue-router'
import { loginUser } from '@/api'
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./App.css"
// loginUser()
Vue.config.productionTip = false
Vue.use(VueRouter).use(ElementUI)
// function checkUserIsAuthenticated() {
//   const user = localStorage.getItem('user')
//   return !!user // 如果 user 存在，则用户已登录
// }
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = checkUserIsAuthenticated()
//   if (to.name === 'home' && !isAuthenticated) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })
const user = JSON.parse(localStorage.getItem('user'))
if (user) {
  store.commit('login', user)
}
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
