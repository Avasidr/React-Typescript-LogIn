import {
  configureStore,
  type ThunkAction,
  type Action
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import settingsReducer from './slices/settings';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whiteList: ['accessToken']
};

const persistSettingsConfig = {
  key: 'settings',
  storage,
  whiteList: ['themeMode']
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    ),
    settings: persistReducer<ReturnType<typeof settingsReducer>>(
      persistSettingsConfig,
      settingsReducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
