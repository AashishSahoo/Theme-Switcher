import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    theme: themeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
