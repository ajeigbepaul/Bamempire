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

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
// import productReducer from "./productRedux";
// import payReducer from "./payRedux";
// import orderReducer from "./orderRedux";
// import authReducer from "./authRedux";
// import imagesReducer from "./imagesRedux";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   blacklist: ['error']
// };
// {user: persistReducer(userPersistConfig, userReducer)
// const rootReducer = combineReducers({cart: cartReducer, product: productReducer, pay: payReducer, order: orderReducer });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);
