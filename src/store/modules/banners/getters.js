export default {
  banners(state) {
    console.log(state.banners.length);
    return state.banners.filter((i) => i.status === true);
  },
};
