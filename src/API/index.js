import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 1000
});

export default {
  login: (email, password) => {
    return api.post('/auth/signin', {
      email,
      password
    });
  },
  autoLogin: (token) => {
    return api.post('/auth/signin/auto', {
      token
    });
  }
};
