import axios from 'axios';

// Requisição HTTP com axios


const api = axios.create(
  {
    baseURL: 'https://api.github.com',
  }
);

export default api;
