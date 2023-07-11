import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Cart-Slice";
import authReducer from "./slices/Auth-Slice";

const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer },
});
export default store;
