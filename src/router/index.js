import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormRegister from '../components/FormRegister.vue'
import FormLogin from '../components/FormLogin.vue'
import store from '../store'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: FormRegister
  },
  {
    path: '/login',
    name: 'Login',
    component: FormLogin
  },
  {
    path: '/carts',
    name: 'Cart',
    component: Checkout
  },
  // history
  {
    path: '/category/:category',
    name: 'CategoryProduct',
    component: Home
  },
  {
    path: '/logout',
    name: 'Logout'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('access_token')) {
    if (to.name === 'Login' || to.name === null) {
      return next('/')
    } else if (to.name === 'Logout') {
      return store.dispatch('logout')
    }
  } else {
    if (to.name === 'Home') {
      return next('/login')
    }
  }
  next()
})

export default router
