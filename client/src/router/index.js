import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '../views/Home.vue'
import ProductList from '../components/ProductList.vue'
import CartList from '../components/CartList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/products',
    name: 'MainPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
    children: [
      {
        path: '',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: '/carts',
        name: 'CartList',
        component: CartList
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'MainPage' })
  // else if (from.name === 'Login' && to.name === 'Register') next({ name: 'Register' })
  else next()
// if ((from.name === 'Home' || to.name !== 'Login') && !localStorage.access_token) next({ name: 'Login' })
})

export default router
