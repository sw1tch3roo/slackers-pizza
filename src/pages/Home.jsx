import React from 'react';

import PizzaCategories from '../components/categories/PizzaCategories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSort from '../components/sort/PizzaSort';
import Skeleton from '../components/pizzaBlock/SkeletonBlock';

import axios from 'axios';

import '../scss/app.scss';
import Pagination from '../components/UI/pagination/Pagination';
import { SearchContext } from '../App';

export const HomeContext = React.createContext();

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]); // массив пицц
  const [isLoading, setIsLoading] = React.useState(Boolean);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'по рейтингу ↓', // по умолчанию будет
    sortProperty: 'rating',
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    setActiveCategory(id);
  };

  const onChangeSort = (object) => setActiveSort(object);

  const onChangePage = (number) => setCurrentPage(number);

  React.useEffect(() => {
    setIsLoading(true);
    // useEffect() позволяет отлавливать действия (служит для первого рендера приложения  )
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';

    // если sortProperty содержит минус,
    // тогда делаем сортировку по возрастанию
    // order-desc - по убыванию

    axios
      .get(
        `https://632cad725568d3cad88ad212.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      }); // сохраняем пиццы в массив (изменяем состояние items)
    window.scrollTo(0, 0); // перемещаем окно в исходное положение
  }, [activeCategory, activeSort, searchValue, currentPage]);

  // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))
  // теперь при изменении activeCategory и activeSort useEffect будет срабатывать каждый раз (на их изменение)

  return (
    <HomeContext.Provider
      value={{ activeCategory, onChangeCategory, activeSort, onChangeSort, onChangePage }}
    >
      <div className="container">
        <div className="content__top">
          <PizzaCategories />
          <PizzaSort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? // в данном случае создаем фейковый массив
              // для предпоказа скелетонов пицц
              [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : items
                // .filter((object) => {
                //   return object.name.toLowerCase().includes(searchValue.toLowerCase());
                //   // возвращаем только те пиццы, название которых совпадает с введенным в инпут значением
                // })
                .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
        </div>
        <Pagination />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
