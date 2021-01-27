import axios from '@/api/axios'

export default {
  state: () => ({
    cart: []
  }),
  mutations: {
    fetchCart (state, data) {
      state.cart = data
    },
    createCart (state, data) {
      state.cart.push(data)
    },
    deleteCart (state, data) {
      state.cart = state.cart.filter(el => el.id !== data.id)
    }
  },
  actions: {
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/carts/customer',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('fetchCart', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    createCart (context, data) {
      console.log(data)
      axios({
        method: 'POST',
        url: '/carts',
        headers: { access_token: localStorage.access_token },
        data: data
      })
        .then(({ data }) => {
          context.commit('createCart', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    updateQty (context, data) {
      axios({
        method: 'PATCH',
        url: '/carts',
        headers: { access_token: localStorage.access_token },
        data: data
      })
        .then(({ data }) => {
          // context.commit('updateQty', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    deleteCart (context, id) {
      console.log(id)
      axios({
        method: 'DELETE',
        url: '/carts/' + id,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('deleteCart', { id })
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }
}
