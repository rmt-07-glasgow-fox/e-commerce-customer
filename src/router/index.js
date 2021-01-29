import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
import ProductList from '../components/ProductList.vue'
import Wishlist from '../components/Wishlist.vue'
import CartList from '../components/CartList.vue'
import TransactionList from '../components/TransactionList.vue'

Vue.use(VueRouter)

const guardRouter = (to, from, next) => {
  let isAuthenticated = false
  // this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (localStorage.getItem('access_token')) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated) {
    next() // allow to enter route
  } else {
    next('/login') // go to '/login';
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: '/login',
        name: 'Login',
        component: LoginForm
      },
      {
        path: '/register',
        name: 'Register',
        component: RegisterForm
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        beforeEnter: guardRouter,
        component: Wishlist
      },
      {
        path: 'cart',
        name: 'Cart',
        beforeEnter: guardRouter,
        component: CartList
      },
      {
        path: 'transaction',
        name: 'Transaction',
        beforeEnter: guardRouter,
        component: TransactionList
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
