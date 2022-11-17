import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/slices/filterSlice';

const Categories: React.FC = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const activeCategory = useSelector((state) => state.filterReducer.category);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          // рендер списка категорий
          return (
            <li
              key={index}
              onClick={() => dispatch(changeCategory(index))} // по индексу делаем перерендер
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
