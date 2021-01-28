import axios from '../api/axios'
import Swal from 'sweetalert2'

const state = {
  listWishlist: []
}

const mutations = {
  SET_WISHLIST (state, payload) {
    state.listWishlist = payload
  }
}

const actions = {
  getAllWishlist ({ commit }) {
    axios
      .get('/wishlist')
      .then(({ data }) => {
        commit('SET_WISHLIST', data)
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
      })
  },

  addItemWishlist ({ dispatch }, payload) {
    axios
      .post('/wishlist/add', payload)
      .then(({ data }) => {
        dispatch('getAllWishlist')
        Swal.fire(
          'Success',
          'Successfully add item to wishlist',
          'success'
        )
      })
      .catch(({ response }) => {
        Swal.fire(
          'Error',
          `${response.data.errors}`,
          'error'
        )
      })
  },
  removeItemWishlist ({ dispatch }, payload) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`/wishlist/${payload}`)
          .then(({ data }) => {
            dispatch('getAllWishlist')
            Swal.fire(
              'Success',
              `${data.message}`,
              'success'
            )
          })
          .catch(({ response }) => {
            Swal.fire(
              'Error',
              `${response.data.errors}`,
              'error'
            )
          })
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
