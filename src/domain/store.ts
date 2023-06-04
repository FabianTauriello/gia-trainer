import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "domain/slices/apislice";
import counterReducer from "domain/slices/counterSlice";
import quizReducer from "domain/slices/quizSlice";
import authReducer from "domain/slices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // This middleware manages cache lifetimes and expiration.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type:
export type AppDispatch = typeof store.dispatch;
