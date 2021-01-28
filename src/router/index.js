import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import ProductDetail from '../views/ProductDetail.vue'
import NotFound from '../views/NotFound.vue'
import Wishlist from '../views/Wishlist.vue'
import History from '../views/History.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    children: [
      {
        path: '/wishlist',
        name: 'Wishlist',
        component: Wishlist
      },
      {
        path: '/history',
        name: 'History',
        component: History
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
    name: 'NotFound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    if (to.name === 'ProductDetail') {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name === 'Profile') next({ name: 'Wishlist' })
  else if (to.name === 'Wishlist' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'History' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Cart' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Wishlist' })
  else if (to.name === 'Register' && isAuthenticated) next({ name: 'Wishlist' })
  else next()
})

export default router
