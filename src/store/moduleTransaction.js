import axios from '@/api/axios'

export default {
  state: () => ({
    transactions: []
  }),
  mutations: {
    fetchTransaction (state, data) {
      state.transactions = data
    },
    clearTransaction (state) {
      state.transactions = []
    }
  },
  actions: {
    fetchTransaction (context) {
      axios({
        method: 'GET',
        url: '/transactions',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('fetchTransaction', data)
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    }
  }
}
