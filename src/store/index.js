import Vue from 'vue'
import Vuex from 'vuex'
import serverAPI from '../api/serverApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    wishlist: [],
    cart: [],
    notif: '',
    successMessage: ''
  },
  mutations: {
    showProducts (state, products) {
      state.products = products
    },
    showWishlist (state, wishlist) {
      state.wishlist = wishlist
    },
    showCart (state, cart) {
      state.cart = cart
    },
    setUser (state, user) {
      state.user = user
    },
    setNotif (state, notif) {
      state.notif = notif
    },
    setMessage (state, message) {
      state.successMessage = message
    }
  },
  actions: {
    fetchProducts (context) {
      serverAPI.get('/products')
        .then(({ data }) => {
          context.commit('showProducts', data)
        })
        .catch(console.log)
    },
    login (context, data) {
      return serverAPI.post('/login', data)
    },
    register (context, data) {
      return serverAPI.post('/register', data)
    },
    fetchWishlist (context) {
      serverAPI.get('/wishlist', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('showWishlist', data)
        })
        .catch(console.log)
    },
    addToWishlist (context, ProductId) {
      serverAPI.post('/wishlist', { ProductId }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          document.activeElement.blur()
          context.dispatch('fetchWishlist')
        })
        .catch(console.log)
    },
    removeFromWishlist (context, ProductId) {
      serverAPI.delete(`/wishlist/${ProductId}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          document.activeElement.blur()
          context.dispatch('fetchWishlist')
        })
        .catch(console.log)
    },
    fetchCart (context) {
      serverAPI.get('/cart', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('showCart', data)
        })
        .catch(console.log)
    },
    addToCart (context, data) {
      serverAPI.post('/cart', data, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          context.commit('setMessage', result.data.message)
          document.activeElement.blur()
        })
        .catch(result => {
          context.commit('setNotif', result.response.data.message)
        })
    },
    removeFromCart (context, ProductId) {
      serverAPI.delete(`/cart/${ProductId}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          context.dispatch('fetchCart')
        })
        .catch(result => {
          context.commit('setNotif', result.response.data.message)
        })
    },
    updateCartProduct (context, { ProductId, quantity }) {
      serverAPI.patch(`/cart/${ProductId}`, { quantity }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          context.commit('setMessage', result.data.message)
          context.dispatch('fetchCart')
        })
        .catch(result => {
          context.commit('setNotif', result.response.data.message)
        })
    }
  },
  modules: {
  }
})
