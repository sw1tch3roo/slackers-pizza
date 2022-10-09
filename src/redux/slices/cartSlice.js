import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart', // имя слайса для корзины
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, object) => object.price + sum, 0);
    // },

    addItem(state, action) {
      const findItem = state.items.find((object) => object.id === action.payload.id);

      if (findItem) findItem.count++;
      else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, object) => object.price * object.count + sum, 0);
    },

    removeItem(state, action) {
      state.items = state.items.filter((object) => object.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions; // вытаскиваем из экшнов определенные методы
// экспортированные методы нами же созданные

export default cartSlice.reducer; // обработка всего стейта
