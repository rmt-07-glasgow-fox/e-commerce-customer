import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    products: [],
    categories: [],
    banners: [],
    carts: [],
    histories: [],
    totalPayment: 0,
    category: '',
    showLogin: false,
    showRegister: false
  },
  mutations: {
    toggleLogin (state, payload) {
      state.showLogin = payload
    },
    toggleRegister (state, payload) {
      state.showRegister = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setProducts (state, payload) {
      state.products = []
      payload.map(product => {
        if (product.status === 'in stock') {
          state.products.push(product)
        }
      })
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCarts (state, payload) {
      state.carts = []
      state.histories = []
      if (payload.length > 0) {
        state.totalPayment = 0
        payload.forEach(cart => {
          if (cart.status === true) {
            state.histories.push(cart)
          } else {
            state.totalPayment += +cart.totalPrice
            state.carts.push(cart)
          }
        })
      }
      state.histories.sort((a, b) => b.id - a.id)
    },
    emptyCarts (state, payload) {
      state.carts = []
    },
    changeCategory (state, payload) {
      state.category = payload
    },
    changeTotalPayment (state, payload) {
      state.totalPayment = payload
    },
    logout (state, payload) {
      state.carts = []
      state.histories = []
      state.totalPayment = 0
      state.user = ''
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const user = await axios({
          method: 'POST',
          url: '/login',
          data: payload
        })
        localStorage.setItem('access_token', user.data.access_token)
        localStorage.setItem('user', payload.email.split('@')[0])
        context.commit('setUser', payload.email.split('@')[0])
        this.dispatch('getCarts')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async register (context, payload) {
      try {
        await axios({
          method: 'POST',
          url: '/register',
          data: payload
        })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async getProducts (context, payload) {
      try {
        const products = await axios({
          method: 'GET',
          url: '/products'
        })
        context.commit('setProducts', products.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getCategories (context, payload) {
      try {
        const categories = await axios({
          method: 'GET',
          url: '/categories'
        })
        context.commit('setCategories', categories.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getBanners (context, payload) {
      try {
        const banners = await axios({
          method: 'GET',
          url: '/banners'
        })
        context.commit('setBanners', banners.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getCarts (context, payload) {
      try {
        const carts = await axios({
          method: 'GET',
          url: '/carts',
          headers: {
            access_token: localStorage.access_token
          }
        })
        context.commit('setCarts', carts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async addCart (content, payload) {
      try {
        await axios({
          method: 'POST',
          url: '/carts',
          headers: {
            access_token: localStorage.access_token
          },
          data: payload
        })
        this.dispatch('getCarts')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async putCart (context, payload) {
      try {
        await axios({
          method: 'PUT',
          url: `/carts/${payload.id}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: payload.data
        })
        this.dispatch('getCarts')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async patchCart (context, payload) {
      try {
        await axios({
          method: 'PATCH',
          url: '/carts',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.dispatch('getCarts')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async deleteCart (context, payload) {
      try {
        await axios({
          method: 'DELETE',
          url: `/carts/${payload}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.dispatch('getCarts')
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  },
  getters: {
    filteredByCategory (state) {
      if (!state.category) {
        return state.products
      } else {
        return state.products.filter(product => product.Category.name === state.category)
      }
    }
  }
})
