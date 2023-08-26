import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, User } from "domain/Types";

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
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUserProfile: (state, action: PayloadAction<Profile>) => {
      state.user!.firstName = action.payload.firstName;
      state.user!.lastName = action.payload.lastName;
      state.user!.profileImgId = action.payload.profileImgId;
      state.user!.profileImgColor = action.payload.profileImgColor;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, updateUserProfile, clearUser } = slice.actions;

export default slice.reducer;
