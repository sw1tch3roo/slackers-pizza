import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  category: 0,
  sort: {
    name: 'по рейтингу ↓', // по умолчанию будет
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'counter', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    changeSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { changeCategory, changeSort } = filterSlice.actions;
// экспортированные методы нами же созданные

export default filterSlice.reducer; // обработка всего стейта
