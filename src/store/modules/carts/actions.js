import axios from '@/api/axios';

export default {
  async addCart(context, payload) {
    try {
      await axios({
        url: '/carts',
        method: 'post',
        data: payload,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async fetchCarts(context) {
    try {
      const res = await axios({
        url: '/carts',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      context.commit('setCarts', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async incrementCart(context, payload) {
    try {
      await axios({
        url: `/carts/${payload}/increment`,
        method: 'patch',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async decrementCart(context, payload) {
    try {
      await axios({
        url: `/carts/${payload}/decrement`,
        method: 'patch',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async changeStatusCart(context, payload) {
    try {
      await axios({
        url: `/carts/${payload.id}/status`,
        method: 'put',
        data: { status: payload.status },
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async deleteCart(context, payload) {
    try {
      await axios({
        url: `/carts/${payload}`,
        method: 'delete',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCarts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
