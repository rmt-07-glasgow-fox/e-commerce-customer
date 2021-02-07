import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/Login.vue'
import WishlistPage from '../views/Wishlist.vue'
import CartPage from '../views/Cart.vue'
import TransactionPage from '../views/Transaction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/wishlist',
    name: 'wishlistPage',
    component: WishlistPage
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: CartPage
  },
  {
    path: '/transaction',
    name: 'TransactionPage',
    component: TransactionPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const checkAuth = localStorage.access_token
  if (!checkAuth && to.name !== 'LoginPage') {
    next({ name: 'LoginPage' })
  } else if (checkAuth && to.name === 'LoginPage') {
    next({ name: 'Home' })
  } else {
    next()
  }
})
export default router
