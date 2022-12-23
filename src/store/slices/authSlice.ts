import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
interface InitStateProps {
  user: any;
}
const initialState: InitStateProps = {
  user: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;}
  },
});
export const { login,logout } = authSlice.actions;
export const authSelect = (state: RootState) => state.auth;
export default authSlice.reducer;
