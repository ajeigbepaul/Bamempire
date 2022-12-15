import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "pay",
  initialState: {
    payment: null,
    isFetching: false,
    error: false,
  },
  
  reducers: {
    // PAY
    orderStart: (state) => {
      state.isFetching = true;
    },
    orderSuccess: (state, action) => {
      state.isFetching = false;
      state.payment = action.payload;
    },
    orderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { orderStart, orderSuccess, orderFailure } = orderSlice.actions;
export default orderSlice.reducer;
