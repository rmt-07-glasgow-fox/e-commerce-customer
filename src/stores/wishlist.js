import axios from '../api/axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

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
        Toast.fire({
          icon: 'success',
          title: 'Successfully add item to wishlist'
        })
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
            Toast.fire({
              icon: 'success',
              title: `${data.message}`
            })
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
