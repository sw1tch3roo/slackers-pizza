import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  page: 1,
};

export const pageSlice = createSlice({
  name: 'counter', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;
// экспортированные методы нами же созданные

export default pageSlice.reducer; // обработка всего стейта
