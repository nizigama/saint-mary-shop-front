import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/catalog/index.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalog
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})

export default router
