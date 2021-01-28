import axios from '@/api/axios';

export default {
  async fetchBanners(context) {
    try {
      const res = await axios({
        url: '/banners',
        method: 'get',
      });
      context.commit('setBanners', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
