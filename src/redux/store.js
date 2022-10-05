import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice'; // импортируем функцию
import searchReducer from './slices/searchSlice';
import itemsReducer from './slices/itemsSlice';

// хранилище редакса
export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    filterReducer, // filter: filterReducer
    searchReducer,
    itemsReducer,
  },
});
