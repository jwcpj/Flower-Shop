import VueRouter from "vue-router";

import FrontHome from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Logon from "@/pages/Logon.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";
import Settlement from "@/pages/Settlement.vue";
import Details from "@/pages/Details.vue"
import Order from "@/pages/Order.vue"
import { checkUserIsAuthenticated } from '@/store/login'
const routes = [
  {
    name: 'home',
    path: "/",
    component: FrontHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'login',
    path: "/login",
    component: Login,
  },
  {
    name: 'logon',
    path: "/logon",
    component: Logon,
  },
  {
    name: 'details',
    path: "/details",
    component: Details,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'shopping-cart',
    path: "/shopping-cart",
    component: ShoppingCart,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'settlement',
    path: "/settlement",
    component: Settlement,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'order',
    path: "/order",
    component: Order,
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = localStorage.getItem('user')

  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router;
