import axios from '../api/axios'
import Swal from 'sweetalert2'

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
        Swal.fire(
          'Success',
          'Successfully add item to cart',
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
            Swal.fire(
              'Success',
              `${data.message}`,
              'success'
            )
          })
          .catch(({dispatch, response }) => {
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
