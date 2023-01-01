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
  getUpComing() {
    return axiosClient.get('/movie/upcoming');
  },
  getNowPlaying() {
    return axiosClient.get('/movie/now_playing');
  },
  getInfo(id: string) {
    return axiosClient.get(`/movie/${id}`);
  },
};
