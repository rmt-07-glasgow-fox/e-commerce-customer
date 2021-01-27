import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/cart',
    name: 'UserCart',
    component: () => import('../views/UserCart.vue')
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: () => import('../views/WishList.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/alltransaction',
    name: 'AllTransaction',
    component: () => import('../views/AllTransaction.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Auth') {
    if (isLogin()) next({ name: 'Home' })
    else next()
  } else {
    if (isLogin() || to.name === 'Home') next()
    else next({ name: 'Auth' })
  }
})

function isLogin () {
  store.commit('authenticate')
  return store.state.isLogin
}

export default router
