import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Movie } from '../../models';
interface InitProps {
  movies: Movie[] | null;
  loading: boolean;
  info: Movie | null;
}
const initialState: InitProps = {
  movies: null,
  loading: false,
  info: null,
};
export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});
export const { setMovies, setLoading, setInfo } = MovieSlice.actions;

export const movieSelect = (state: RootState) => state.movie;
export default MovieSlice.reducer;
