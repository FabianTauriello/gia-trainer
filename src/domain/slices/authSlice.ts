import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, User } from "domain/Types";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
