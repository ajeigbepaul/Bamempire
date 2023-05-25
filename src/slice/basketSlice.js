import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions.
    addToBasket: (state, action) => {
      state.quantity += 1;
      state.items = [...state.items, action.payload];
      state.total += action.payload.price * action.payload.qty;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index !== -1) {
        const removedProduct = state.items[index];
        const removedProductTotal = removedProduct.price * removedProduct.qty;
        const updatedProducts = [...state.items];
        updatedProducts.splice(index, 1);

        return {
          ...state,
          items: updatedProducts,
          quantity: state.quantity - 1,
          total: state.total - removedProductTotal,
        };
      }

      return state;
    },
    updateBasket: (state, action) => {
      const { productId, qty } = action.payload;
      const product = state.items.find((item) => item._id === productId);

      if (product) {
        const productTotal = product.price * product.qty;
        state.total -= productTotal;
        product.qty = qty;
        state.total += product.price * product.qty;
      }
      // if (product) {
      //   const prevQty = product.qty;
      //   const prevTotal = product.price * prevQty;
      //   const updatedTotal = product.price * qty;

      //   product.qty = qty;
      //   state.total += updatedTotal - prevTotal;
      // }
    },

    clearBasket: (state, action) => {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket, updateBasket } =
  basketSlice.actions;
// How we pull information from the Global state
export const selectItems = (state) => state.basket.items;
export const selectTot = (state) => state.basket.total;
// USEFUL WHEN YOU ARE DEALING WITH THE PRODUCTS INDIVIDUALLY.
// export const selectTotal = (state) => state.basket.items.reduce((total, item)=>total + item.price,0)

export default basketSlice.reducer;
