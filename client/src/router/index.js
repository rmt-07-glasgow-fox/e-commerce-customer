import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import ItemList from '../components/ItemList.vue'
import Cart from '../components/Cart.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      {
        path: '',
        name: 'ItemList',
        component: ItemList
      }, {
        path: '/cart',
        name: 'Cart',
        component: Cart
      }
    ]
  }, {
    path: '/auth',
    name: '',
    component: Auth,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }, {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
