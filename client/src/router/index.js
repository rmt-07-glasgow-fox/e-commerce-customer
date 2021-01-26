import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import MyCart from '../views/MyCart.vue'
import Banners from '../views/Banners.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/mycart',
    name: 'MyCart',
    component: MyCart
  },
  {
    path: '/banners',
    name: 'Banners',
    component: Banners
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Home' })
  } else if (localStorage.access_token && to.name === 'Register') {
    next({ name: 'Home' })
  } else if (localStorage.access_token) {
    next()
  } else if (to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
