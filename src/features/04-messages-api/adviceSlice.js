// adviceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adviceSlice = createSlice({
  name: "advice",
  initialState: "",
  reducers: {
    setAdvice(state, action) {
      return action.payload;
    },
  },
});

export const { setAdvice } = adviceSlice.actions;

export default adviceSlice.reducer;
