import axios from '../api/axios'
import Swal from 'sweetalert2'

const state = {
  listTransaction: []
}

const mutations = {
  SET_TRANSACTION (state, payload) {
    state.listTransaction = payload
  }
}

const actions = {
  getAllTransaction ({ commit }) {
    axios
      .get('/history')
      .then(({ data }) => {
        commit('SET_TRANSACTION', data)
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
      })
  },
  checkoutCart ({ dispatch }, payload) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't checkout this cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, checkout it!'
    }).then((result) => {
      if (result.value) {
        axios
          .post(`/checkout`)
          .then(({ data }) => {
            dispatch('cart/getAllCart', null, { root: true })
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
