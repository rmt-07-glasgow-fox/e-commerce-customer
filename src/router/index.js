import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Carts from '../views/Carts'
import Checkout from '../views/Checkout'
import Transactions from '../views/Transactions'
import Wishlists from '../views/Wishlists'
import Register from '../views/Register'

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
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: Wishlists
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name === 'Register') {
    next()
  } else if (!localStorage.access_token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
