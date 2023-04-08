import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { User } from "domain/Types";

// TODO Change this slice to 'auth'
type UserStatusState = {
  user: User | null;
};

const initialState: UserStatusState = {
  user: null,
};

export const userStatusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userStatusSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default userStatusSlice.reducer;
