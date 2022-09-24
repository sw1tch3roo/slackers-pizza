import React from 'react';

import PizzaCategories from '../components/categories/PizzaCategories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSort from '../components/sort/PizzaSort';

import axios from 'axios';

import '../scss/app.scss';
import Skeleton from '../components/pizzaBlock/SkeletonBlock';

const Home = () => {
  const [items, setItems] = React.useState([]); // массив пицц
  const [isLoading, setIsLoading] = React.useState(Boolean);

  React.useEffect(() => {
    setIsLoading(true);
    // useEffect() позволяет отлавливать действия (служит для первого рендера приложения  )
    axios.get('https://632cad725568d3cad88ad212.mockapi.io/items').then((response) => {
      setItems(response.data);
      setIsLoading(false);
    }); // сохраняем пиццы в массив (изменяем состояние items)
  }, []); // второй параметр - условие (в данном случае [] - didMount), то есть функция сработает только один раз
  // при изменении массива вызывается функция (если передать items - будет бесконечный вызов функции)
  // так как каждый раз массив items обновляется (срабатывает изменение состояния - setItems(items))

  return (
    <div>
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
          : items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                {...pizza} // spread-оператор
                // дестректурием объект (вытаскиваем все свойства объекта и передаем в компонент)

                // name={pizza.name} т
                // price={pizza.price}
                // image={pizza.imageUrl}
                // types={pizza.types}
                // sizes={pizza.sizes}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
