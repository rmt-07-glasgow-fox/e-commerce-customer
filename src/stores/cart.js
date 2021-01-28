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
  listCart: []
}

const mutations = {
  SET_CART (state, payload) {
    state.listCart = payload
  }
}

const actions = {
  getAllCart ({ commit }) {
    axios
      .get('/cart')
      .then(({ data }) => {
        commit('SET_CART', data)
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
      })
  },
  addItemCart ({ dispatch }, payload) {
    axios
      .post('/cart/add', payload)
      .then(({ data }) => {
        dispatch('getAllCart')
        Toast.fire({
          icon: 'success',
          title: 'Successfully add item to cart'
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
  removeItemCart ({ dispatch }, payload) {
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
          .delete(`/cart/${payload}`)
          .then(({ data }) => {
            dispatch('getAllCart')
            Toast.fire({
              icon: 'success',
              title: `${data.message}`
            })
          })
          .catch(({ dispatch, response }) => {
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
