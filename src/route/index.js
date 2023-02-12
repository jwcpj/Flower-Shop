import VueRouter from "vue-router";

import FrontHome from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Logon from "@/pages/Logon.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";
import Settlement from "@/pages/Settlement.vue";

const routes = [
  {
    path: "/",
    component: FrontHome,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logon",
    component: Logon,
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
  },
  {
    path: "/settlement",
    component: Settlement,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
