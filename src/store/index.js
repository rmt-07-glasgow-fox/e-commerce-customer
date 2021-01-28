import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartsCount: 0,
    wishlistsCount: 0,
    carts: [],
    wishlists: [],
    totalPrice: 0
  },
  mutations: {
    GET_PRODUCTS (state, data) {
      state.products = data
    },
    GET_CARTS (state, data) {
      state.cartsCount = data.cart.length
      state.totalPrice = `Rp ${data.total}`
      state.carts = data.cart
    },
    GET_WISHLISTS (state, data) {
      state.wishlistsCount = data.length
      state.wishlists = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          data.forEach(el => {
            var reverse = el.price.toString().split('').reverse().join('')
            var ribuan = reverse.match(/\d{1,3}/g)
            ribuan = ribuan.join('.').split('').reverse().join('')
            el.price = `Rp ${ribuan},00`
          })
          context.commit('GET_PRODUCTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: '/loginCustomer',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire({
            icon: 'success',
            title: `Hi ${payload.email} !`,
            text: 'Welcome to excommerce'
          })
          router.push('/')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Register Success !',
            text: `Now You can Login with Your Email : ${payload.email}`
          })
          router.push('/login')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    },
    fetchCarts (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data.total, 'ini cart oi')
          data.cart.forEach((el) => {
            var reverse = el.Product.price.toString().split('').reverse().join('')
            var ribuan = reverse.match(/\d{1,3}/g)
            ribuan = ribuan.join('.').split('').reverse().join('')
            el.Product.price = `Rp ${ribuan},00`
          })
          var reverse = data.total.toString().split('').reverse().join('')
          var ribuan = reverse.match(/\d{1,3}/g)
          ribuan = ribuan.join('.').split('').reverse().join('')
          data.total = `Rp ${ribuan},00`
          context.commit('GET_CARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchWishlists (context) {
      axios({
        url: '/wishlists',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          data.forEach((el) => {
            var reverse = el.Product.price.toString().split('').reverse().join('')
            var ribuan = reverse.match(/\d{1,3}/g)
            ribuan = ribuan.join('.').split('').reverse().join('')
            el.Product.price = `Rp ${ribuan},00`
          })
          context.commit('GET_WISHLISTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToWishlists (context, productId) {
      return axios({
        url: `/wishlists/${productId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    removeFromWishlists (context, wishlistId) {
      return axios({
        url: `/wishlists/${wishlistId}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addToCarts (context, productId) {
      return axios({
        url: `/carts/${productId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    removeCarts (context, cartId) {
      return axios({
        url: `/carts/${cartId}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    minusCart (context, cartId) {
      return axios({
        url: `/carts/${cartId}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
