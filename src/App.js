import React from 'react';

import PizzaCategories from './components/categories/PizzaCategories';
import PizzaHeader from './components/header/PizzaHeader';
import PizzaBlock from './components/pizzaBlock/PizzaBlock';
import PizzaSort from './components/sort/PizzaSort';

import pizzas from './assets/pizzas.json';
import axios from 'axios';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <PizzaHeader />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <PizzaCategories />
            <PizzaSort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => {
              return (
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
