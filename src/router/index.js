import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Registerform.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) next({ path: '/' })
  if (to.path === '/register' && localStorage.access_token) next({ path: '/' })
  if (to.path === '/cart' && !localStorage.access_token) next({ path: '/' })
  if (to.path === '/history' && !localStorage.access_token) next({ path: '/' })
  else next()
})

export default router
