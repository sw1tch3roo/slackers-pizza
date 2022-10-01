import { configureStore } from '@reduxjs/toolkit';
// хранилище редакса

import filterReducer from './slices/filterSlice'; // импортируем функцию
import pageReducer from './slices/pageSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    filterReducer,
    pageReducer,
    searchReducer,
  },
});
