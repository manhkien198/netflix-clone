import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CommonReducer from './slices/common';
import { persistReducer, persistStore,PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AuthReducer from './slices/authSlice';
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  common: CommonReducer,
  auth: AuthReducer,
})
const persistedUser = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedUser,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST],
    },
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
