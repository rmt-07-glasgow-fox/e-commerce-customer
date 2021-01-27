import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import eCommerceAPI from '../api/eCommerce'
import store from '../store/index'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Login' && !localStorage.access_token) {
        next()
      } else {
        eCommerceAPI.get('/products', {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            store.commit('insertProducts', data)
            store.dispatch('fetchCart', localStorage.id)
            router.push('/')
          })
          .catch(err => console.log(err, 'err store fetchProducts'))
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Register' && !localStorage.access_token) {
        next()
      } else {
        eCommerceAPI.get('/products', {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            store.commit('insertProducts', data)
            router.push('/')
          })
          .catch(err => console.log(err, 'err store fetchProducts'))
      }
    }
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/notFound.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'Register' || to.name === 'Login') && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
