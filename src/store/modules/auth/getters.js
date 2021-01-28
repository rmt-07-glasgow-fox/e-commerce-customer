export default {
  acccess_token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
  fullname(state) {
    return `${state.user.firstname} ${state.user.lastname}`;
  },
  email(state) {
    return state.user.email;
  },
};
