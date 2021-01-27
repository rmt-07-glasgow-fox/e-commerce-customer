import axios from '@/api/axios';

export default {
  async fetchProducts(context) {
    try {
      const res = await axios({
        url: '/products',
        method: 'get',
      });
      context.commit('setProducts', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  filterProducts(context, payload) {
    context.commit('setFilteredProducts', payload);
  },
};
