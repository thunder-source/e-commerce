import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";
import filterReducer from "./features/filterSlice";
import { eCommerceApi } from "./services/eCommerceApi";

export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    cart: cartReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eCommerceApi.middleware),
});
