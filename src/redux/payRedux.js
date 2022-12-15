import { createSlice } from "@reduxjs/toolkit";

const paySlice = createSlice({
  name: "pay",
  initialState: {
    payment: null,
    isFetching: false,
    error: false,
  },
  
  reducers: {
    // PAY
    payStart: (state) => {
      state.isFetching = true;
    },
    paySuccess: (state, action) => {
      state.isFetching = false;
      state.payment = action.payload;
    },
    payFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { payStart, paySuccess, payFailure } = paySlice.actions;
export default paySlice.reducer;
