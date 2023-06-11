import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SettingsState = {
  darkMode: boolean;
};

const initialState: SettingsState = {
  // darkMode: true,
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      // if (state.darkMode) {
      //   document.documentElement.classList.remove("dark");
      // } else {
      //   document.documentElement.classList.add("dark");
      // }
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = slice.actions;

export default slice.reducer;
