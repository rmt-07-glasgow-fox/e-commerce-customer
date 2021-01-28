import axios from '@/api/axios';

export default {
  async checkout(context, payload) {
    try {
      await axios({
        url: '/orders',
        method: 'post',
        data: payload,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchOrders');
      this.dispatch('fetchProducts');
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async fetchOrders(context) {
    try {
      const res = await axios({
        url: '/orders',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      context.commit('setOrders', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
