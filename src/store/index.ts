import { configureStore } from '@reduxjs/toolkit';
import CommonReducer from './slices/common';
import AuthReducer from './slices/authSlice';
export const store = configureStore({
  reducer: {
    common: CommonReducer,
    auth: AuthReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
