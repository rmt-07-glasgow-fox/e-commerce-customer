import axios from '@/api/axios';

export default {
  async fetchCategories(context) {
    try {
      const res = await axios({
        url: '/categories',
        method: 'get',
      });
      context.commit('setCategories', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
