import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { toggleDarkMode } from "domain/slices/settingsSlice";

const domMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === toggleDarkMode.type) {
    console.log("hello?: ", action);
    console.log("toggleDarkMode.type: ", toggleDarkMode.type);
    console.log("store.getState(): ", store.getState());
    const state: RootState = store.getState();

    // if (state.settings.darkMode) {
    //   document.documentElement.classList.remove("dark");
    // } else {
    //   document.documentElement.classList.add("dark");
    // }
  }

  return next(action);
};

export default domMiddleware;

// how react docs do it:
// first load
// - check system preferences and use that style, but don't save it to local storage
// - on change, save to local storage
// subsequent loads
// - use local storage settings as default
