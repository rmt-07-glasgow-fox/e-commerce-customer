import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyCart from '../views/MyCart'
import Swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myCart',
    name: 'MyCart',
    component: MyCart
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'MyCart' && !localStorage.getItem('access_token')) {
    Swal.fire({
      icon: 'error',
      title: 'Login or Register to continue'
    })
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
