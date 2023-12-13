import { configureStore } from "@reduxjs/toolkit";
import booleanSlice from "./booleanSlice";

const store = configureStore({
  reducer: {
    app: booleanSlice
  }
});
export default store;
