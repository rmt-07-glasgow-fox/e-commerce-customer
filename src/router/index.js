import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import CartPage from '../views/CartPage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '*',
    name: '404NotFound',
    component: NotFound
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'HistoryPage',
    component: HistoryPage,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = localStorage.getItem('access_token')
    if (!auth) {
      next({ name: 'LoginPage' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
