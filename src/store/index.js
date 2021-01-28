import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: '',
    products: [],
    customerCarts: []
  },
  mutations: {
    insertAccessToken (state, payload) {
      state.access_token = payload
    },
    removeAccessToken (state) {
      state.access_token = ''
      localStorage.clear()
      router.push('/')
    },
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCustomerCarts (state, payload) {
      state.customerCarts = payload
    }
  },
  actions: {
    loginCustomer (context, payload) {
      axios({
        method: 'POST',
        url: '/login-customer',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.commit('insertAccessToken', data.access_token)
          localStorage.setItem('access_token', data.access_token)
          // dispatch fetch products
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    registerCustomer (context, payload) {
      axios({
        method: 'POST',
        url: '/register-customer',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.commit('insertAccessToken', data.access_token)
          localStorage.setItem('access_token', data.access_token)
          // dispatch fetch products
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    fetchCustomerCarts (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: { access_token: this.state.access_token }
      })
        .then(({ data }) => {
          context.commit('insertCustomerCarts', data)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    addProductToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: { access_token: this.state.access_token },
        data: {
          quantity: 1,
          idProduct: payload
        }
      })
        .then(({ data }) => {
          this.dispatch('fetchProducts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    deleteCustomerCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts',
        headers: { access_token: this.state.access_token },
        data: {
          idProduct: payload
        }
      })
        .then(() => {
          this.dispatch('fetchCustomerCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    },
    updateQuantityProductCart (context, payload) {
      axios({
        method: 'PUT',
        url: '/carts',
        headers: { access_token: this.state.access_token },
        data: {
          idProduct: payload.idProduct,
          quantity: payload.quantity
        }
      })
        .then(() => {
          this.dispatch('fetchCustomerCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.Error,
            text: err.response.data.message
          })
        })
    }
  },
  modules: {
  }
})
