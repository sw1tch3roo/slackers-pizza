import PizzaCategories from './components/categories/PizzaCategories';
import PizzaHeader from './components/header/PizzaHeader';
import PizzaBlock from './components/pizzaBlock/PizzaBlock';
import PizzaSort from './components/sort/PizzaSort';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <PizzaHeader />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <PizzaCategories />
            <PizzaSort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock name={'Чизбургер'} price={500} />
            <PizzaBlock name={'Маргарита'} price={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
