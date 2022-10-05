import React from 'react';
import { useNavigate } from 'react-router-dom';

import PizzaCategories from '../components/categories/PizzaCategories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSort, { listOfSort } from '../components/sort/PizzaSort';
import Skeleton from '../components/pizzaBlock/SkeletonBlock';
import Pagination from '../components/UI/pagination/Pagination';

import axios from 'axios';
import qs from 'qs';

import '../scss/app.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../redux/slices/filterSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const [items, setItems] = React.useState([]); // массив пицц
  const [isLoading, setIsLoading] = React.useState(Boolean);

  const { category: activeCategory, sort: activeSort } = useSelector(
    (state) => state.filterReducer,
  );
  const currentPage = useSelector((state) => state.filterReducer.page);
  const searchValue = useSelector((state) => state.searchReducer.value);

  const fetchPizzas = () => {
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
  };

  // если изменились параметры и был первый рендер, то...
  React.useEffect(() => {
    if (isMounted.current) {
      // был ли первый рендер?
      const queryString = qs.stringify({
        sortProperty: activeSort.sortProperty,
        activeCategory,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [activeCategory, activeSort.sortProperty, currentPage]);

  // если был первый рендер, то идет проверка URL-параметров и сохранение в Redux'е
  React.useEffect(() => {
    if (window.location.search) {
      // поисковая строчка (для парсинга)
      const params = qs.parse(window.location.search.substring(1)); // substring удаляем первый символ в строке
      const sort = listOfSort.find((object) => object.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, []);

  // если был первый рендер, тогда запрашиваются пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0); // перемещаем окно в исходное положение

    if (!isSearch.current) fetchPizzas();

    isSearch.current = false;
  }, [activeCategory, activeSort.sortProperty, searchValue, currentPage]);

  // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))
  // теперь при изменении activeCategory и activeSort useEffect будет срабатывать каждый раз (на их изменение)

  return (
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
  );
};

export default Home;
