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
      const filter = state.cart.filter(el => el.id === data.id)
      filter.length > 0
        ? state.cart.map(el => {
          el.id === data.id && (el.quantity = data.quantity)
        })
        : state.cart.push(data)
      console.log(state.cart)
    },
    deleteCart (state, data) {
      state.cart = state.cart.filter(el => el.id !== data.id)
    },
    updateQty (state, data) {
      state.cart.map(el => {
        el.id === data.id && (el.quantity = data.quantity)
      })
    },
    clearCart (state) {
      state.cart = []
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
      axios({
        method: 'POST',
        url: '/carts',
        headers: { access_token: localStorage.access_token },
        data: data
      })
        .then(({ data }) => {
          console.log(data, '??')
          context.commit('createCart', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    updateQty (context, data) {
      axios({
        method: 'PATCH',
        url: '/carts/' + data.id,
        headers: { access_token: localStorage.access_token },
        data: { quantity: data.quantity }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('updateQty', data)
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
          console.log(data)
          context.commit('deleteCart', { id })
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }
}
