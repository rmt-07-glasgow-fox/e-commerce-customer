import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: '',
    cartProduct: [],
    loggedin: ''
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCart (state, payload) {
      state.cart = payload
    },
    insertCartProduct (state, payload) {
      state.cartProduct = payload
    },
    changeStatus (state, payload) {
      state.loggedin = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/customer/register',
        data: payload
      }).then(user => {
        console.log(user)
        router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/customer/login',
        data: payload
      }).then(user => {
        localStorage.setItem('access_token', user.data.access_token)
        context.commit('changeStatus', true)
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      }).then(products => {
        context.commit('insertProducts', products.data)
      }).catch(err => {
        console.log(err)
      })
    },
    readCart (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(cart => {
        context.commit('insertCart', cart.data)
      }).catch(err => {
        console.log(err)
      })
    },
    addCart (context, payload) {
      const { productId, cartId } = payload
      axios({
        method: 'POST',
        url: `carts/${cartId}/${productId}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(cartProduct => {
        console.log(cartProduct.data)
        context.commit('insertCartProduct', cartProduct.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getCartProduct (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(cart => {
        context.commit('insertCart', cart.data)
        const { id } = cart.data
        return axios({
          method: 'GET',
          url: `/carts/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
      }).then(cartProduct => {
        context.commit('insertCartProduct', cartProduct.data)
      }).catch(err => {
        console.log(err)
      })
    },
    updateCartProduct (context, payload) {
      const { cartId, productId, quantity } = payload
      console.log(cartId, productId, quantity)
      axios({
        method: 'PATCH',
        url: `/carts/${cartId}/${productId}`,
        data: { quantity },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(data => {
        console.log(data.data)
        context.dispatch('getCartProduct')
      }).catch(err => {
        console.log(err)
      })
    },
    removeCartProduct (context, payload) {
      const { cartId, productId } = payload
      console.log(payload)
      axios({
        method: 'DELETE',
        url: `/carts/${cartId}/${productId}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(data => {
        console.log(data.data)
        context.dispatch('getCartProduct')
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
