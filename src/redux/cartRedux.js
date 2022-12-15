import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total:0
  },
  reducers: {
    addCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += (action.payload.price * action.payload.qty) 
    },
    removeCart:(state, action)=>{
      state.products.map((product) => {
        if (product._id === action.payload._id) {
          const nextCartItems = state.products.filter(
            (item) => item._id !== product._id
          );

          state.products = nextCartItems;
          state.quantity -= 1;
          state.total -= (action.payload.price * action.payload.qty)
        }
        return state;
      });
    },

    clearCart:(state, action)=> {
      state.products = [];
      state.total= 0;
      state.quantity= 0;
      toast.error("Cart cleared", { position: "bottom-right" });
    },
  },
});

export const { addCart,removeCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;