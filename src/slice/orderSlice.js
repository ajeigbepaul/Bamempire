import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.order = action.payload;
    },
    removeOrder: (state, action) => {
      state.order = {};
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;
export const selectOrder = (state) => state.orders.order;

export default orderSlice.reducer;
