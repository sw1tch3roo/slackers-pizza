import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice'; // импортируем функцию
import itemsReducer from './slices/itemsSlice';
import cartReducer from './slices/cartSlice';

// хранилище редакса
export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    filterReducer, // filter: filterReducer
    itemsReducer,
    cartReducer,
  },
});
