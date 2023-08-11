import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const apiURLs = {
  development: "http://localhost:3000/api",
  production:
    "https://alpha-marketplace-backend-18469668e160.herokuapp.com/api",
};

let baseURL = "";

if (window.location.hostname === "localhost") {
  baseURL = apiURLs.development;
} else {
  baseURL = apiURLs.production;
}

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
