import React from 'react';
import { useNavigate } from 'react-router-dom';

import PizzaCategories from '../components/categories/PizzaCategories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSort from '../components/sort/PizzaSort';
import Skeleton from '../components/pizzaBlock/SkeletonBlock';
import Pagination from '../components/UI/pagination/Pagination';

import qs from 'qs';

import '../scss/app.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, itemsSelector } from '../redux/slices/itemsSlice';
import { filterSelector, searchSelector } from '../redux/slices/filterSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(itemsSelector); // массив пицц

  const {
    category: activeCategory,
    sort: activeSort,
    page: currentPage,
  } = useSelector(filterSelector);

  const searchValue = useSelector(searchSelector);

  const getPizzas = async () => {
    // setIsLoading(true);
    // useEffect() позволяет отлавливать действия (служит для первого рендера приложения  )
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';

    // если sortProperty содержит минус,
    // тогда делаем сортировку по возрастанию
    // order-desc - по убыванию

    dispatch(
      // все ошибки обработаны в редаксе
      fetchItems({
        category,
        sortBy,
        order,
        search,
        currentPage,
      }),
    ); // запрос на бекэнд и сохранение пицц

    window.scrollTo(0, 0);
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
    getPizzas();
  }, []);

  // если был первый рендер, тогда запрашиваются пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0); // перемещаем окно в исходное положение

    if (!isSearch.current) getPizzas();

    isSearch.current = false;
  }, [activeCategory, activeSort.sortProperty, searchValue, currentPage]);

  // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))
  // теперь при изменении activeCategory и activeSort useEffect будет срабатывать каждый раз (на их изменение)

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <PizzaCategories />
        <PizzaSort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы :(
            <br />
            Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
