import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import user from '../slices/user/user';
import consultationDetails from '../slices/consultationDetails/consultationDetails';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['consultationDetails'],
};
const consultationDetailsPersistConfig = {
  key: 'consultationDetails',
  storage,
};

const rootReducer = combineReducers({
  user: user.reducer,
  consultationDetails: persistReducer(
    consultationDetailsPersistConfig,
    consultationDetails.reducer,
  ),
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  // 要検証
  // non-serializable value errorがなくなるかわりに、RootStateがanyになってステートの補完が効かなくなる
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Non-serializable value errorをなくす
  //   }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
