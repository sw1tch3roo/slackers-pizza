import React from 'react';

import PizzaCategories from '../components/categories/PizzaCategories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSort from '../components/sort/PizzaSort';
import Skeleton from '../components/pizzaBlock/SkeletonBlock';

import axios from 'axios';

import '../scss/app.scss';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]); // массив пицц
  const [isLoading, setIsLoading] = React.useState(Boolean);

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'по рейтингу ↓', // по умолчанию будет
    sortProperty: 'rating',
  });

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
        `https://632cad725568d3cad88ad212.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      }); // сохраняем пиццы в массив (изменяем состояние items)
    window.scrollTo(0, 0); // перемещаем окно в исходное положение
  }, [activeCategory, activeSort, searchValue]); // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))
  // теперь при изменении activeCategory и activeSort useEffect будет срабатывать каждый раз (на их изменение)

  return (
    <div className="container">
      <div className="content__top">
        <PizzaCategories
          activeCategory={activeCategory}
          onChangeCategory={(id) => setActiveCategory(id)}
        />
        <PizzaSort activeSort={activeSort} onChangeSort={(object) => setActiveSort(object)} />
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
    </div>
  );
};

export default Home;
