import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  category: 0,
  sort: {
    name: 'по рейтингу ↓', // по умолчанию будет
    sortProperty: 'rating',
  },
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filters', // имя слайса для корр
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    changeSort(state, action) {
      state.sort = action.payload;
    },

    changePage: (state, action) => {
      state.page = action.payload;
    },

    setFilters(state, action) {
      // вшиваем данные из поисковой строки
      state.category = Number(action.payload.activeCategory);
      state.sort = action.payload.sort;
      state.page = Number(action.payload.currentPage);
    },
  },
});

export const { changeCategory, changeSort, changePage, setFilters } = filterSlice.actions; // вытаскиваем из экшнов определенные методы
// экспортированные методы нами же созданные

export default filterSlice.reducer; // обработка всего стейта
