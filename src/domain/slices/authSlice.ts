import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "domain/Types";

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
