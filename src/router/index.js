import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'
import CartList from '../views/CartList.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cartlist',
    name: 'CartList',
    component: CartList
  },
  {
    path: '/customer',
    component: Customer,
    children: [
      {
        path: '',
        name: 'Customer',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(localStorage.getItem('access_token'), 'get')
  // console.log(localStorage.access_token, 'OBJ')
  if (!localStorage.getItem('access_token')) {
    if (to.name === 'Home') {
      return next()
    } else if (to.name === 'Customer' || to.path === '/customer/register') {
      return next()
    }
  } else {
    if (to.name === 'Customer' || to.path === '/customer/register') return next({ path: '/' })
    next()
  }
})

export default router
