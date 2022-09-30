import React from 'react';
import { HomeContext } from '../../pages/Home';

const Categories = () => {
  const { activeCategory, onChangeCategory } = React.useContext(HomeContext);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          // рендер списка категорий
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)} // по индексу делаем перерендер
              className={activeCategory === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
