import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: [],
    material: {},
    carts: [],
    wishlists: [],
    histories: [],
    category: '',
    role: ''
  },
  mutations: {
    insertUser (state, payload) {
      state.user = payload
    },
    insertMaterials (state, payload) {
      state.materials = payload
    },
    insertMaterial (state, payload) {
      state.material = payload
    },
    insertCategory (state, payload) {
      state.category = payload
    },
    insertRole (state, payload) {
      state.role = payload
    },
    insertCarts (state, payload) {
      state.carts = payload
    },
    insertWishlists (state, payload) {
      state.wishlists = payload
    },
    insertHistories (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/login')
        })
        .catch(err => console.log(err))
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const accessToken = data.access_token
          const role = data.role

          context.commit('insertRole', role)
          localStorage.setItem('access_token', accessToken)
          router.push('/material')
        })
        .catch(err => console.log(err))
    },
    fetchMaterials (context) {
      axios({
        method: 'GET',
        url: '/materials',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('insertMaterials', response.data)
        })
        .catch(err => console.log(err))
    },
    fetchOneMaterial (context, payload) {
      axios({
        method: 'GET',
        url: '/materials/' + payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('insertMaterial', data)
        })
        .catch(err => console.log(err))
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertCarts', data)
        })
        .catch(err => console.log(err))
    },
    fetchWishlists (context, payload) {
      axios({
        method: 'GET',
        url: '/wishlists',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertWishlists', data)
        })
        .catch(err => console.log(err))
    },
    fetchHistories (context, payload) {
      axios({
        method: 'GET',
        url: '/histories',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data, 'ini bentuk history')
          context.commit('insertHistories', data)
        })
        .catch(err => console.log(err))
    },
    addCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: { access_token: localStorage.access_token },
        data: {
          MaterialId: payload.MaterialId,
          amount: payload.amount
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
          router.push('/cart')
        })
        .catch(err => console.log(err))
    },
    addWishlist (context, payload) {
      axios({
        method: 'POST',
        url: '/wishlists',
        headers: { access_token: localStorage.access_token },
        data: {
          MaterialId: payload
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchWishlists')
          router.push('/wishlist')
        })
        .catch(err => console.log(err))
    },
    addHistory (context, payload) {
      axios({
        method: 'POST',
        url: '/histories',
        headers: { access_token: localStorage.access_token },
        data: {
          description: payload.description,
          amount: payload.amount
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchHistories')
          router.push('/history')
        })
        .catch(err => console.log(err))
    },
    updateAmountCart (context, payload) {
      axios({
        method: 'PATCH',
        url: '/carts/' + payload.id,
        headers: { access_token: localStorage.access_token },
        data: {
          amount: payload.amount
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
        })
        .catch(err => console.log(err))
    },
    deleteCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts/' + payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCarts')
        })
        .catch(err => console.log(err))
    },
    removeCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts',
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          context.dispatch('fetchCarts')
        })
        .catch(err => console.log(err))
    },
    deleteWishlist (context, payload) {
      axios({
        method: 'DELETE',
        url: '/wishlists/' + payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchWishlists')
        })
        .catch(err => console.log(err))
    },
    deleteHistory (context, payload) {
      axios({
        method: 'DELETE',
        url: '/histories',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchHistories')
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    filterMaterials: state => {
      if (state.category === 'all' || state.category === '') {
        return state.materials
      } else {
        const filtered = []
        for (let i = 0; i < state.materials.length; i++) {
          const item = state.materials[i]
          if (item.category === state.category) {
            filtered.push(item)
          }
        }
        return filtered
      }
    }
  }
})
