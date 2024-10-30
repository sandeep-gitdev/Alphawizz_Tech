import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cardSlice from './cardSlice'; // adjust the import based on your structure

const persistConfig = {
  key: 'root',
  storage,
};

const rootdReducer = persistReducer(persistConfig, cardSlice);

const store = configureStore({
  reducer: {
    cart: rootdReducer,
  },
});

export const persistor = persistStore(store);
export default store;
