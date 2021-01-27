export default {
  setUser(state, payload) {
    state.user = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
    };
    state.token = payload.access_token;
  },
  removeUser(state) {
    state.user = null;
    state.token = null;
  },
};
