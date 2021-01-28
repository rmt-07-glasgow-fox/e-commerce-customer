import axios from '@/api/axios'

export default {
  state: () => ({
    wishlist: []
  }),
  mutations: {
    fetchWishlist (state, data) {
      state.wishlist = data
    },
    createWishlist (state, data) {
      state.wishlist.push(data)
    },
    deleteWishlist (state, data) {
      state.wishlist = state.wishlist.filter(el => el.id !== data.id)
    },
    clearWishlist (state) {
      state.wishlist = []
    }
  },
  actions: {
    fetchWishlist (context) {
      axios({
        method: 'GET',
        url: '/wishlists/customer',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('fetchWishlist', data)
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    createWishlist (context, data) {
      axios({
        method: 'POST',
        url: '/wishlists',
        headers: { access_token: localStorage.access_token },
        data: { ProductId: data.ProductId }
      })
        .then(({ data }) => {
          console.log(data, '??')
          context.dispatch('toastMsg', { icon: 'success', title: 'Success add to wishlist' })
          context.commit('createWishlist', data)
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'info', title: msg })
        })
    },
    deleteWishlist (context, id) {
      console.log(id)
      axios({
        method: 'DELETE',
        url: '/wishlists/' + id,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('deleteWishlist', { id })
        })
        .catch(({ response }) => {
          console.log(response)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    }
  }
}
