import { createRouter, createWebHistory } from "vue-router";
import Catalog from "../views/catalog/index.vue";
import Login from "../views/auth/login.vue";
import Register from "../views/auth/register.vue";
import Cart from "../views/cart/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Catalog,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;
