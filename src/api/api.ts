import { axiosClient } from './axiosClient';
export const api = {
  getTrending() {
    return axiosClient.get(`/trending/all/week`);
  },
  getTv() {
    return axiosClient.get('/tv/popular');
  },
  getTopRated() {
    return axiosClient.get('/tv/top_rated');
  },
};
