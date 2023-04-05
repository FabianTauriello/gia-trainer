import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "domain/slices/apislice";
import counterReducer from "domain/slices/counterSlice";
import quizAttemptReducer from "domain/slices/quizAttemptSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quizAttempt: quizAttemptReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // This middleware manages cache lifetimes and expiration.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type:
export type AppDispatch = typeof store.dispatch;
