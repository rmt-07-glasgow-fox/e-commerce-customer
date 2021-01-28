import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    err: '',
    errorData: '',
    products: [],
    carts: [],
    wishlists: [],
    transactions: [],
    banners: [],
    filterName: '',
    isLogin: false,
    checkCarts: false
  },
  mutations: {
    errHandler (state, payload) {
      state.errorData = payload
    },
    fetchAllProducts (state, payload) {
      state.products = payload
    },
    fetchAllCarts (state, payload) {
      payload.forEach(el => {
        if (el.quantity > 1) {
          el.Product.price = el.Product.price * el.quantity
          state.carts = payload
        } else {
          state.carts = payload
        }
      })
      state.carts = payload
    },
    fetchAllWishlists (state, payload) {
      state.wishlists = payload
    },
    fetchAllTransactions (state, payload) {
      payload.forEach(el => {
        if (el.quantity > 1) {
          el.price = el.price * el.quantity
          state.transactions = payload
        } else {
          state.transactions = payload
        }
      })
      state.transactions = payload
    },
    fetchAllBanners (state, payload) {
      state.banners = payload
    },
    setFilterByName (state, payload) {
      state.filterName = payload
    },
    setIsLogin (state, payload) {
      state.isLogin = payload
    },
    setCheckCarts (state, payload) {
      state.checkCarts = payload
    }
  },
  actions: {
    getUser (context, payload) {
      const username = payload.split('@')
      localStorage.setItem('username', username[0])
      // console.log(localStorage.username)
    },
    checkingLogin (context, payload) {
      if (localStorage.access_token) {
        context.commit('setIsLogin', true)
        // console.log(this.state.isLogin)
      } else {
        context.commit('setIsLogin', false)
      }
    },
    logout (context, payload) {
      localStorage.clear()
      context.commit('errHandler', '')
      this.state.filterName = ''
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(res => {
          console.log(res.data)

          if (res.data.msg) {
            context.commit('errHandler', 'Invalid email / password')
          } else {
            localStorage.setItem('access_token', res.data.access_token)
            context.commit('errHandler', '')
            router.push('/')
          }
        })
        .catch(err => {
          context.commit('errHandler', 'Invalid Email / password')
          console.log(err)
          router.push('/login')
          // const msg = err.errors
          // const temp = []
          // for (let i = 0; i < msg.length; i++) {
          //   if (msg.length > 1) {
          //     temp.push(msg[i])

          //     const str = temp.join(', ')

          //     context.commit('errHandler', str)
          //   } else if (msg.length <= 1) {
          //     context.commit('errHandler', msg[i])
          //   }
          // }
        })
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(res => {
          console.log(res.data)
          context.commit('errHandler', '')
          router.push('/login')
        })
        .catch(err => {
          context.commit('errHandler', 'Invalid Email / password')
          router.push('/register')
          console.log(err)
          // const msg = err.data.errors

          // console.log(msg)
          // const temp = []
          // for (let i = 0; i < msg.length; i++) {
          //   if (msg.length > 1) {
          //     temp.push(msg[i])
          //     const str = temp.join(', ')
          //     context.commit('errHandler', str)
          //   } else if (msg.length <= 1) {
          //     context.commit('errHandler', msg[i])
          //   }
          // }
        })
    },

    // CRUD PRODUCTS
    fetchProducts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products',
          { headers })
        .then(res => {
          console.log(res.data)
          // for (let i = 0 ; i < res.data)
          context.commit('fetchAllProducts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD CARTS
    fetchCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/carts',
          { headers })
        .then(res => {
          console.log(res.data)
          if (res.data.length !== 0) {
            context.commit('setCheckCarts', true)
          } else {
            context.commit('setCheckCarts', false)
          }
          context.commit('fetchAllCarts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .post('/carts', { id: payload }, { headers })
        .then(res => {
          context.commit('errHandler', '')
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          context.commit('errHandler', 'Error Datas')
          console.log(err)

          // const msg = err.response.data.errors
          // const temp = []
          // for (let i = 0; i < msg.length; i++) {
          //   if (msg.length > 1) {
          //     temp.push(msg[i])
          //     const str = temp.join(', ')
          //     context.commit('errHandling', str)
          //   } else if (msg.length <= 1) {
          //     context.commit('errHandling', msg[i])
          //   }
          // }
        })
    },
    // edit stock when add, or min
    plusCart (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .patch('/carts/increase', { id: payload }, { headers })
        .then(res => {
          context.commit('errHandler', '')
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          context.commit('errHandler', 'Error Addding to Carts')
          console.log(err)

          // const msg = err.response.data.errors
          // const temp = []
          // for (let i = 0; i < msg.length; i++) {
          //   if (msg.length > 1) {
          //     temp.push(msg[i])
          //     const str = temp.join(', ')
          //     context.commit('errHandling', str)
          //   } else if (msg.length <= 1) {
          //     context.commit('errHandling', msg[i])
          //   }
          // }
        })
    },
    minCart (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .patch('/carts/decrease', { id: payload }, { headers })
        .then(res => {
          context.commit('errHandler', '')
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          context.commit('errHandler', 'Error minus to Carts')
          console.log(err)

          // const msg = err.response.data.errors
          // const temp = []
          // for (let i = 0; i < msg.length; i++) {
          //   if (msg.length > 1) {
          //     temp.push(msg[i])
          //     const str = temp.join(', ')
          //     context.commit('errHandling', str)
          //   } else if (msg.length <= 1) {
          //     context.commit('errHandling', msg[i])
          //   }
          // }
        })
    },

    searchProduct (context, payload) {
      context.commit('setFilterByName', payload)
      console.log(this.state.filterName)
    },

    deleteCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .delete(`/carts/${payload}`, { headers })
        .then(res => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD WISHLISTS
    fetchWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/wishlists',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllWishlists', res.data)
          console.log(this.state.transactions)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .post('/wishlists', { id: payload }, { headers })
        .then(res => {
          context.commit('errHandler', '')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .delete(`/wishlists/${payload}`, { headers })
        .then(res => {
          context.dispatch('fetchWishlists')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD TRANSACTIONS
    fetchTrans (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/transactions',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllTransactions', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    // checkouts
    payedCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/carts/pay', null, { headers })
        .then(res => {
          console.log(res.data)
          context.commit('errHandler', '')
          router.push('/transactions')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD BANNER
    fetchBanners (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllBanners', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  getters: {
    filterByName: state => {
      if (state.filterName === '' || state.filterName === 'allData') {
        return state.products
      } else {
        return state.products.filter(product => {
          return product.name === state.filterName
        })
      }
    }
  }
})
