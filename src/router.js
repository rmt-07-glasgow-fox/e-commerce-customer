import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Cart from './views/Cart'
import Wishlist from './views/Wishlist'
import History from './views/History'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist,
      meta: { requiresAuth: true }
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = store.getters.isAuth
    if (!auth) next({ name: 'Login' })
    else next()
  } else next()
})

export default router
