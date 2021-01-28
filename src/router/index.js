import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Cart from '../views/Cart.vue'
import History from '../views/History.vue'
import FormLogin from '../components/FormLogin.vue'
import FormRegister from '../components/FormRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '',
        name: 'FormLogin',
        component: FormLogin
      },
      {
        path: '/register',
        name: 'FormRegister',
        component: FormRegister
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carts',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/histories',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('access_token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
    next()
  } else {
    if (to.path === '/') {
      next({ path: '/login' })
    }
    next()
  }
})

export default router
