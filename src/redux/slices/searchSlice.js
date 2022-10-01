import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние инпута
  value: '',
};

export const searchSlice = createSlice({
  name: 'counter', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    setSearchTargetValue: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setSearchTargetValue } = searchSlice.actions;
// экспортированные методы нами же созданные

export default searchSlice.reducer; // обработка всего стейта
