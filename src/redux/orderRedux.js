import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    isFetching: false,
    error: false,
  },
  
  reducers: {
    // ORDER
    orderStart: (state) => {
      state.isFetching = true;
    },
    orderSuccess: (state, action) => {
      state.isFetching = false;
      state.order = action.payload;
    },
    orderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    statusStart: (state) => {
      state.isFetching = true;
    },
    statusSuccess: (state, action) => {
      state.isFetching = false;
      state.order = action.payload;
    },
    statusFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { orderStart, orderSuccess, orderFailure, statusStart, statusSuccess, statusFailure } = orderSlice.actions;
export default orderSlice.reducer;
