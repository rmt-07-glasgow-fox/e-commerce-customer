export default {
  fetchUserInfo (state, payload) {
    state.fetchUserInfo = payload
  },
  isLogin (state, bool) {
    state.isLogin = bool
  }
}
