import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

const actions = {
  login ({ commit, dispatch }, payload) {
    localStorage.setItem('access_token', null)
    commit('SET_TOKEN', null, { root: true })
    axios
      .post('/login', payload)
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        commit('SET_TOKEN', data.access_token, { root: true })
        dispatch('cart/getAllCart', null, { root: true })
        router.push({ name: 'Home' })
        Swal.fire(
          'Success',
          'Login successfully',
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
  register ({ commit }, payload) {
    axios
      .post('/register', payload)
      .then(({ data }) => {
        router.push({ name: 'Login' })
        Swal.fire(
          'Success',
          'Register successfully',
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
}

export default {
  namespaced: true,
  actions
}
