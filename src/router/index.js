import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Carts from '../views/Carts.vue'
import Wishlists from '../views/Wishlists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: Wishlists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  if (to.name === 'Register' && isAuthenticated) next({ name: 'Home' })
  if (to.name === 'Cart' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'Wishlist' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
