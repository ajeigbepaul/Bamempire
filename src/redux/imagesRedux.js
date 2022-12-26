import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    isFetching: false,
    error: false,
  },
  
  reducers: {
    // ORDER
    imagesStart: (state) => {
      state.isFetching = true;
    },
    imagesSuccess: (state, action) => {
      state.isFetching = false;
      state.images = action.payload;
    },
    imagesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { imagesStart, imagesSuccess, imagesFailure} = imagesSlice.actions;
export default imagesSlice.reducer;
