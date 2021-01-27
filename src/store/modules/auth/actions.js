import axios from '@/api/axios';

export default {
  async register(context, payload) {
    try {
      await axios.post('/users/register', payload);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
