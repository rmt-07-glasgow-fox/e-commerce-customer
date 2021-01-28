import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    categories: [],
    isLoggedIn: false,
    categoryName: '',
    carts: [],
    histories: [],
    userLoggedIn: ''
  },
  mutations: {
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_ISLOGGEDIN (state, payload) {
      state.isLoggedIn = payload
    },
    SET_CATEGORY_NAME (state, payload) {
      state.categoryName = payload
    },
    SET_CARTS (state, payload) {
      state.carts = payload
    },
    SET_HISTORIES (state, payload) {
      state.histories = payload
    },
    SET_USER_LOGGED_IN (state, payload) {
      state.userLoggedIn = payload
    }
  },
  actions: {
    fetchBanners (context, payload) {
      axios({
        method: 'GET',
        url: '/banners'
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchCategories (context, payload) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          context.commit('SET_CATEGORIES', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.commit('SET_ISLOGGEDIN', true)
          context.commit('SET_USER_LOGGED_IN', data.email)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('email', data.email)
          router.push('/')
          Vue.swal({
            title: 'Success login!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleRegister (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.dispatch('handleLogin', {
            email: payload.email,
            password: payload.password
          })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogout (context, payload) {
      Vue.swal({
        title: 'Are you sure?',
        text: 'Are you sure want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yep!'
      })
        .then(res => {
          if (res.isConfirmed) {
            localStorage.clear()
            context.commit('SET_ISLOGGEDIN', payload)
            this.state.categoryName = ''
            router.push('/')
            Vue.swal({
              title: 'Logout success!',
              icon: 'success',
              toast: true,
              position: 'top-end',
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false
            })
          }
        })
    },
    handleAddProductToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts/' + payload.ProductId,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.amount
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log('ALLLO')
          console.log(err.response)
          Vue.swal({
            title: 'Oopsie!',
            text: 'Please login first',
            icon: 'error'
          })
          router.push('/login')
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteCartById (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status: false
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    checkoutCart (context) {
      axios({
        method: 'PATCH',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
          Vue.swal({
            title: 'Thank You!',
            text: data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
          router.push('/history')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchHistories (context, payload) {
      axios({
        method: 'GET',
        url: '/carts/order/histories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_HISTORIES', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  getters: {
    filterByCategory: state => {
      if (state.categoryName === '' || state.categoryName === 'allData') {
        return state.products
      } else {
        return state.products.filter(product => {
          return product.Category.name === state.categoryName
        })
      }
    }
  },
  modules: {
  }
})
