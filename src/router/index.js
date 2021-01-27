import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import HomePage from '../views/HomePage'
import AuthPage from '../views/AuthPage'
import ProductsPage from '../views/ProductsPage'
import WishlistPage from '../views/WishlistPage'
import HistoryPage from '../views/HistoryPage'
import CartPage from '../views/CartPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: 'products',
        name: 'ProductsPage',
        component: ProductsPage
      },
      {
        path: 'wishlist',
        name: 'WishlistPage',
        component: WishlistPage
      },
      {
        path: 'history',
        name: 'HistoryPage',
        component: HistoryPage
      },
      {
        path: 'cart',
        name: 'CartPage',
        component: CartPage
      }
    ]
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
