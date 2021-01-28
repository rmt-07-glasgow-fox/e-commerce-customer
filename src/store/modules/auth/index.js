import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    user: null,
    token: null,
  },
  actions,
  getters,
  mutations,
};
