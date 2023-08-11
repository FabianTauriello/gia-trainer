import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "domain/Types";

type AuthState = {
  user: User | null;
  token: string | null; // for JWT
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      // state.user = {
      //   id: action.payload.userId,
      //   firstName: action.payload.firstName,
      //   lastName: action.payload.lastName,
      //   email: action.payload.email,
      // };
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, clearUser } = slice.actions;

export default slice.reducer;
