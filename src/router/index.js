import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyCart from '../views/MyCart.vue'

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
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (!isAuthenticated && to.name === 'Products') {
    next({ name: 'Home' })
  } else if (!isAuthenticated && to.name === 'MyCart') {
    next({ name: 'Login' })
  } else if (isAuthenticated && to.name === 'Login') {
    next({ name: 'Products' })
  } else if (isAuthenticated && to.name === 'Register') {
    next({ name: 'Products' })
  } else {
    next()
  }
})

export default router
