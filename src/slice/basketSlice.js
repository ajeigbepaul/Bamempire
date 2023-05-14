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
      // const index = state.items.findIndex(
      //   (item) => item._id === action.payload._id
      // );
      // const newBasket = [...state.items];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(`cannot delete ${action.payload._id}. It does not exit`);
      // }
      // state.items = newBasket;
      // state.quantity -= 1;
      // state.total -= action.payload.price * action.payload.qty;
      // state.items.map((item) => {
      //   if (item._id === action.payload._id) {
      //     const nextCartItems = state.items.filter(
      //       (item) => item._id !== item._id
      //     );

      //     state.items = nextCartItems;
      //     state.quantity -= 1;
      //     state.total -= action.payload.price * action.payload.qty;
      //   }
      //   return state;
      // });
      // const updatedProducts = state.items.filter(
      //   (item) => item._id !== action.payload._id
      // );

      // const removedProduct = state.items.find(
      //   (item) => item._id === action.payload._id
      // );

      // if (removedProduct) {
      //   const removedProductTotal = removedProduct.price * removedProduct.qty;

      //   return {
      //     ...state,
      //     items: updatedProducts,
      //     quantity: state.quantity - 1,
      //     total: state.total - removedProductTotal,
      //   };
      // }
     
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

    clearBasket: (state, action) => {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
// How we pull information from the Global state
export const selectItems = (state) => state.basket.items;
export const selectTot = (state) => state.basket.total;
// USEFUL WHEN YOU ARE DEALING WITH THE PRODUCTS INDIVIDUALLY.
// export const selectTotal = (state) => state.basket.items.reduce((total, item)=>total + item.price,0)

export default basketSlice.reducer;
