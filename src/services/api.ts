import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.103:8888/v1/api',
});

export default api;