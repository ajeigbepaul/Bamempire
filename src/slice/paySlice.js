import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payment: {},
};

export const paySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    addPay: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const { addPay } = paySlice.actions;
export const selectPay = (state) => state.pay.payment;

export default paySlice.reducer;
