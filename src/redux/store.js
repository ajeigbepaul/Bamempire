import { configureStore, combineReducers } from "@reduxjs/toolkit";
import basketReducer from "../slice/basketSlice";
import payReducer from "../slice/paySlice";
import orderReducer from "../slice/orderSlice";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  basket: basketReducer,
  pay: payReducer,
  order: orderReducer,
});
const persistreducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistreducer,
});

