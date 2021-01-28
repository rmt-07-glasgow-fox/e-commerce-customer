import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Material from '../views/Material.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Wishlist from '../views/Wishlist.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/material',
    name: 'Material',
    component: Material
  },
  {
    path: '/material/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
