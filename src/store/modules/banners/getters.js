export default {
  banners(state) {
    return state.banners.filter((i) => i.status === true);
  },
};
