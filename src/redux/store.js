import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlices";

export const store = configureStore({
    reducer: {
        filter: filterReducer
  },
});

