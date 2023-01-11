import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import payReducer from "./payRedux";
import orderReducer from "./orderRedux";
import authReducer from "./authRedux";
// import imagesReducer from "./imagesRedux";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ['error']
};
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser'],
  // blacklist:['error']
}
// {user: persistReducer(userPersistConfig, userReducer)
const rootReducer = combineReducers({user: persistReducer(userPersistConfig, userReducer), cart: cartReducer, product: productReducer, pay: payReducer, order: orderReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
