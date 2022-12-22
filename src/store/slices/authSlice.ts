import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
interface InitStateProps {
  user: any;
}
const initialState: InitStateProps = {
  user: {},
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { login } = authSlice.actions;
export const authSelect = (state: RootState) => state.auth;
export default authSlice.reducer;
