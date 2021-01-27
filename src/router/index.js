import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import FrontPage from '../components/home/FrontPage.vue'
import Cart from '../components/home/Cart.vue'
import Wishlist from '../components/home/Wishlist.vue'
import History from '../components/home/History.vue'
import Category from '../components/home/Category.vue'
import Product from '../components/home/Product.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      { path: '', name: 'Home', component: FrontPage },
      { path: '/cart', name: 'Cart', component: Cart },
      { path: '/wishlist', name: 'Wishlist', component: Wishlist },
      { path: '/history', name: 'History', component: History },
      { path: '/category', name: 'Category', component: Category },
      { path: '/product', name: 'Product', component: Product }
    ]
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
