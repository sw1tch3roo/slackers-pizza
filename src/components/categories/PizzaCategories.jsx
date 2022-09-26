import React from 'react';

const Categories = ({ activeCategory, onChangeCategory }) => {
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
