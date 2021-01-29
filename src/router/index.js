import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CartsList from '../components/CartsList.vue'
import ProductList from '../components/ProductList.vue'
import HistoryList from '../components/HistoryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: '/carts',
        name: 'CartsList',
        component: CartsList
      },
      {
        path: '/histories',
        name: 'HistoryList',
        component: HistoryList
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token) {
    next('/')
  } else if ((to.name === 'CartsList' || to.name === 'HistoryList') && !localStorage.access_token) {
    next('/login')
  } else {
    next()
  }
})

export default router
