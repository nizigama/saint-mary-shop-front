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
      meta: {
        hideWhenLoggedIn: true,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        hideWhenLoggedIn: true,
      },
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

router.beforeEach((to, from) => {
  const token = localStorage.getItem("auth_token");

  if (to.meta.hideWhenLoggedIn && token !== null) {
    return { name: "Home" };
  }

  if (to.meta.requiresAuth && token === null) {
    return { name: "Login" };
  }
});

export default router;
