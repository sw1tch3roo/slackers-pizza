import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  pizzas: [],
};

export const itemsSlice = createSlice({
  name: 'items', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    setItems: (state, action) => {
      state.pizzas = [...state.pizzas, action.payload];
    },
  },
});

export const { setItems } = itemsSlice.actions;
// экспортированные методы нами же созданные

export default itemsSlice.reducer; // обработка всего стейта
