import axios from '@/api/axios'

export default {
  state: () => ({
    products: [],
    product: {}
  }),
  mutations: {
    fetchAllProducts (state, data) {
      state.products = data
    },
    fetchOneProduct (state, data) {
      state.product = data
    }
  },
  actions: {
    fetchAllProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('fetchAllProducts', data)
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    fetchOneProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('fetchOneProduct', data)
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    }
  }
}
