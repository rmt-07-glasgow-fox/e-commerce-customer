export default {
  setProducts(state, payload) {
    state.products = payload;
    state.filteredProducts = payload;
  },
  setFilteredProducts(state, payload) {
    if (payload === 0) {
      state.filteredProducts = state.products;
    } else {
      state.filteredProducts = state.products.filter((p) => p.Category.id === payload);
    }
  },
};
