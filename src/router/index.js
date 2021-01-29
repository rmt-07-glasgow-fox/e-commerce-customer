import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import LoginForm from '../components/LoginForm.vue'
import RegisForm from '../components/RegisForm.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm
      },
      {
        path: '/register',
        name: 'RegisForm',
        component: RegisForm
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
