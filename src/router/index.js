import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeNotLogged from '../components/HomeNotLogged'
import HomeLogged from '../components/HomeLogged'
import CardProduct from '../components/CartProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'HomeNotLogged',
        component: HomeNotLogged
      },
      {
        path: 'home',
        name: 'HomeLogged',
        component: HomeLogged
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginForm.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterForm.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    children: [
      {
        path: '',
        name: 'CardProduct',
        component: CardProduct
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (!isAuthenticated && to.name === 'HomeLogged') {
    next({ name: 'HomeNotLogged' })
  } else if (!isAuthenticated && to.name === 'CardProduct') {
    next({ name: 'Login' })
  } else if (isAuthenticated && to.name === 'Login') {
    next({ name: 'HomeLogged' })
  } else if (isAuthenticated && to.name === 'Register') {
    next({ name: 'HomeLogged' })
  } else if (isAuthenticated && to.name === 'HomeNotLogged') {
    next({ name: 'HomeLogged' })
  } else {
    next()
  }
})

export default router
