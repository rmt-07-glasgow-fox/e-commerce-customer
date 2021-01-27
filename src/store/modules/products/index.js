import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    products: [],
    filteredProducts: [],
  },
  actions,
  getters,
  mutations,
};
