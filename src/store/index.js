import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/ecommerceServer'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userProducts: [],
    products: [],
    categories: [],
    authStatus: 'Login',
    name: '',
    cartCount: 0
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCategories (state, payload) {
      state.categories = payload
    },
    insertUserProducts (state, payload) {
      state.userProducts = payload
    },
    changeAuthStatus (state, payload) {
      state.authStatus = payload
    },
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload
    },
    setName (state, payload) {
      state.name = payload
    },
    setCartCount (state, payload) {
      state.cartCount = payload
    },
    setWishlist (state, payload) {
      state.userProducts = state.userProducts.map(e => {
        if (e.ProductId === payload.id) {
          e.wishlist = payload.wishlist
          return e
        }
      })
    }
  },
  actions: {
    login (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.name = data.name
          context.commit('setIsLoggedIn', true)
          context.commit('setName', data.name)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/register',
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('login', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      ecommerceServer({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories (context) {
      ecommerceServer({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          context.commit('insertCategories', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchUserProducts (context, payload) {
      ecommerceServer({
        method: 'GET',
        url: '/users/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          if (payload === 'pending') {
            data = data.filter(e => e.paymentStatus === payload)
            context.commit('insertUserProducts', data)
            context.commit('setCartCount', data.length)
          } else if (payload === 'paid') {
            data = data.filter(e => e.paymentStatus === payload)
            context.commit('insertUserProducts', [])
            context.commit('setCartCount', 0)
          } else {
            context.commit('insertUserProducts', data)
          }
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/add-to-cart',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', 'pending')
        })
        .catch(err => {
          console.log(err)
        })
    },
    buyProduct (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/buy',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateCart (context, payload) {
      ecommerceServer({
        method: 'PUT',
        url: '/users/updated',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', payload.paymentStatus)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addWishlist (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/users/wishlist',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts')
        })
        .catch(err => [
          console.log(err.response)
        ])
    },
    deleteUserProduct (context, payload) {
      ecommerceServer({
        method: 'DELETE',
        url: '/users/product',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', 'pending')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateStock (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/products/stock/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
