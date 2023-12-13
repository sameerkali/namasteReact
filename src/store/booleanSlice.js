import { createSlice } from "@reduxjs/toolkit";

const booleanSlice = createSlice({
  name: "boolean",
  initialState: {
    name: "sameer",
    bool: true
  },
  reducers: {
    toggleBool: (state) => {
      state.bool = !state.bool;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { toggleBool, changeName } = booleanSlice.actions;
export default booleanSlice.reducer;
