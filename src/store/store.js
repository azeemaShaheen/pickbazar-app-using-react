import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import usersReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: usersReducer,
  },
});