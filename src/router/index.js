import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import History from '../views/History.vue'
// import ListProduct from '../views/ListProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/products',
  //   name: 'ListProduct',
  //   component: ListProduct
  // },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/histories',
    name: 'History',
    component: History
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('access_token')
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
//   else next()
// })
// misal sudah ada checkout maka yang diprotect adalah /checkout
// misal belum ada checkout maka yang d protect ada /cart

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('access_token')
//   if (to.name === 'Login' && isAuthenticated) {
//     next({ name: 'Home' })
//   } else if (to.name === 'Login' && !isAuthenticated) {
//     next()
//   } else if (to.name !== 'Home' && !isAuthenticated) {
//     next({ name: 'Home' })
//   } else next()
// })

export default router
