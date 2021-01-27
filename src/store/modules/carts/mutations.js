export default {
  setCarts(state, payload) {
    state.carts = payload;
  },
  removeCarts(state) {
    state.carts = [];
  },
};
