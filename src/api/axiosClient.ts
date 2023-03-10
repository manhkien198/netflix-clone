import axios from 'axios';
export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
axiosClient.interceptors.request.use(
  function (config) {
    const language = localStorage.getItem('i18nextLng');
    config.params = {
      ...config.params,
      api_key: process.env.REACT_APP_API_KEY,
      page: 1,
      language,
    };
    // Làm gì đó trước khi request dược gửi đi
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);
