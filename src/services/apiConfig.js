import axios from 'axios';

const apiURLs = {
  development: 'http://localhost:3000/api',
};

let baseURL = '';

if (window.location.hostname === 'localhost') {
  baseURL = apiURLs.development;
} else {
  // for later
}

const api = axios.create({
  baseURL,
});

export default api;
