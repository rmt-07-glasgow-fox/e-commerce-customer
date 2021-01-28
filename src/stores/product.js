import axios from '../api/axios'

const state = {
  listProduct: []
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.listProduct = payload
  }
}

const actions = {
  getAllProduct ({ commit }) {
    axios
      .get('/products')
      .then(({ data }) => {
        commit('SET_PRODUCT', data)
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
