import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  const token = localStorage.getItem('access_token')
  store.dispatch('getProducts')

  if (localStorage.access_token) {
    store.dispatch('getCartItems')
    store.commit('updateToken', token)
  }

  if (to.name === 'Home') {
    next()
  } else if (to.name === 'Login' || to.name === 'Register') {
    if (localStorage.access_token) {
      next('/')
    } else {
      next()
    }
  } else {
    if (!localStorage.access_token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
