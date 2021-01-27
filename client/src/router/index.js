import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Carts from '../views/Carts.vue'
import store from '../store'

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
    path: '/categories/:id',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  const account = localStorage.getItem('account')
  if (isAuthenticated) {
    store.commit('setLogin', true)
    store.commit('setAccount', account)
    store.dispatch('getCarts')
  } else {
    store.commit('setLogin', false)
    store.commit('setAccount', '')
  }
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  if ((to.name === 'Login' || to.name === 'Register') && isAuthenticated) next({ name: 'Home' })
  else if (to.name === 'Carts' && !isAuthenticated) next({ name: 'Home' })
  else next()
})

export default router
