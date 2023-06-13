import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/casrtSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});
