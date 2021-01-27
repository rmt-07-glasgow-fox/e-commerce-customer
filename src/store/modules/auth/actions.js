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
  async login(context, payload) {
    try {
      const res = await axios.post('/users/login', payload);
      localStorage.setItem('access_token', res.data.access_token);
      const { firstname, lastname, email } = res.data;
      localStorage.setItem('user', JSON.stringify({ firstname, lastname, email }));
      context.commit('setUser', res.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  autoLogin(context) {
    const access_token = localStorage.getItem('access_token');
    const { firstname, lastname, email } = JSON.parse(localStorage.getItem('user'));
    const data = {
      firstname,
      lastname,
      email,
      access_token,
    };
    if (access_token) {
      context.commit('setUser', data);
    }
  },
  logout(context) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    context.commit('removeUser');
  },
};
