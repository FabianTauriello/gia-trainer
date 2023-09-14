import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Settings } from "domain/Types";

const initialState: Settings = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
  exposeName: false,
  showQuizTimer: false,
};

const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setAllSettings: (state, action: PayloadAction<Settings>) => {
      // state = action.payload;
      state.darkMode = action.payload.darkMode;
      state.exposeName = action.payload.exposeName;
      state.showQuizTimer = action.payload.showQuizTimer;
    },
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

export const { setAllSettings, setDarkMode, toggleDarkMode, toggleExposeName, toggleShowQuizTimer } = slice.actions;

export default slice.reducer;
