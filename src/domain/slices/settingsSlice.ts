import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SettingsState = {
  darkMode: boolean;
  exposeName: boolean;
  showQuizTimer: boolean;
};

const initialState: SettingsState = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
  exposeName: false,
  showQuizTimer: false,
};

const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleExposeName: (state) => {
      state.exposeName = !state.exposeName;
    },
    toggleShowQuizTimer: (state) => {
      state.showQuizTimer = !state.showQuizTimer;
    },
  },
});

export const { setDarkMode, toggleDarkMode, toggleExposeName, toggleShowQuizTimer } = slice.actions;

export default slice.reducer;
