import axios from "axios";

const baseurl = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: baseurl,
  timeout: 10000, // 10 detik
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
api.interceptors.request.use(
  (config) => {
    // dapatkan token dari local storage atau session storage
    const token =
      localStorage.getItem("bariertoken") ||
      sessionStorage.getItem("bariertoken");
    // jika token ada tambahkan ke header request
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log("request dikirim : ", config);
    return config;
  },
  (error) => {
    // console.log("request error : ", error);
    return Promise.reject(error);
  }
);
// response interceptor
api.interceptors.response.use(
  (response) => {
    // console.log("response dikirim : ", response);
    return response;
  },
  (error) => {
    // console.log("response error : ", error);
    if (error.response?.status === 401) {
      // Token expired atau tidak valid
      localStorage.removeItem("bariertoken");
      sessionStorage.removeItem("bariertoken");
      // Redirect ke login atau refresh token
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
