import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081', // Change to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
