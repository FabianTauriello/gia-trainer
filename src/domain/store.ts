import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, createTransform } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "domain/slices/apislice";
import settingsReducer from "domain/slices/settingsSlice";
import counterReducer from "domain/slices/counterSlice";
import quizReducer from "domain/slices/quizSlice";
import authReducer from "domain/slices/authSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  counter: counterReducer,
  quiz: quizReducer,
  auth: authReducer,
  settings: settingsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    version: 1,
    key: "root", // Key prefix for the persisted state
    storage, // Storage engine to use (default: localStorage)
    whitelist: ["auth", "settings", "quiz"],

    // ...configure other options here (e.g. blacklist, whitelist, state reconciler, transforms for manipulating data between hydration/rehydration etc)
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  // This middleware manages cache lifetimes and expiration.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }).concat(
      apiSlice.middleware
    ),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type:
export type AppDispatch = typeof store.dispatch;
