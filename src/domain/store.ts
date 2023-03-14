import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "domain/slices/counterSlice";
import quizAttemptReducer from "domain/slices/quizAttemptSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quizAttempt: quizAttemptReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type:
export type AppDispatch = typeof store.dispatch;
