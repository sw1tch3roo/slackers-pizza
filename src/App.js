import PizzaCategories from './components/categories/PizzaCategories';
import PizzaHeader from './components/header/PizzaHeader';
import PizzaBlock from './components/pizzaBlock/PizzaBlock';
import PizzaSort from './components/sort/PizzaSort';

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
            <PizzaBlock name={'Чизбургер'} price={500} />
            <PizzaBlock name={'Маргарита'} price={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
