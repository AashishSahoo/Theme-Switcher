import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mockUserData } from "../../utils/userData";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

// const userFromStorage = localStorage.getItem("user");

const initialState: AuthState = {
  // user: userFromStorage ? JSON.parse(userFromStorage) : null,
  user: null,

  // isAuthenticated: userFromStorage ? true : false,
  isAuthenticated: false,

  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const user = mockUserData.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        state.error = null;
        // localStorage.setItem("user", JSON.stringify(user));
      } else {
        state.user = null;
        state.isAuthenticated = false;
        state.error = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
