import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const themeTypes = ["light", "dark", "color"] as const;
export type ThemeType = (typeof themeTypes)[number];

interface ThemeState {
  currentTheme: ThemeType;
}

const getInitialTheme = (): ThemeType => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return themeTypes.includes(savedTheme as ThemeType)
      ? (savedTheme as ThemeType)
      : "light";
  }
  return "light";
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.currentTheme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
