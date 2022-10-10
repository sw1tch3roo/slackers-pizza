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
    addItem(state, action) {
      const findItem = state.items.find((object) => object.id === action.payload.id);

      if (findItem) findItem.count++; // если пицца в массиве еще не присутствует
      else {
        state.items.push({
          // то создаем ее
          ...action.payload,
          count: 1, // и по умолчанию делаем ее количество 1
        });
      }

      state.totalPrice = state.items.reduce((sum, object) => object.price * object.count + sum, 0);
    },

    minusItem(state, action) {
      // для корзины
      const findItem = state.items.find((object) => object.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      // полное удаление айтема из массива
      state.items = state.items.filter((object) => object.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions; // вытаскиваем из экшнов определенные методы
// экспортированные методы нами же созданные

export default cartSlice.reducer; // обработка всего стейта
