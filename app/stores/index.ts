import { combineReducers, configureStore } from "@reduxjs/toolkit";

import user from "../slices/user";

const rootReducer = combineReducers({
  counter: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
