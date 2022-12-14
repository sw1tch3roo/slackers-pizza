import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, cartItemSelectorById } from '../../redux/slices/cartSlice';

type PizzaBlockProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  types: string[];
  sizes: number[];
  rating: number;
};

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  size: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  name,
  price,
  image,
  types,
  sizes,
  rating,
}) => {
  const dispatch = useDispatch();

  const cartItem: any = useSelector(cartItemSelectorById(id));

  const typeNames: string[] = ['тонкое', 'традиционное'];

  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: Item = {
      id,
      name,
      price,
      image,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };

    dispatch(addItem(item));
  };

  // <React.Fragment></React.Fragment> так можно делать, чтобы не использовать родительский div при return'е из компонента

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={image} alt="Pizza" />
        <Link to={`/pizza/${id}`}>
          <h4 className="pizza-block__title">{name}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, indexType) => {
              // в type 0 / 1
              return (
                <li
                  key={indexType}
                  onClick={() => setActiveType(indexType)}
                  className={activeType === indexType ? 'active' : ''}
                >
                  {typeNames[indexType]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, indexSize) => {
              //в массиве sizes содержатся размеры пиццы (26 / 30 / 40)
              return (
                <li
                  key={indexSize}
                  onClick={() => setActiveSize(indexSize)}
                  className={activeSize === indexSize ? 'active' : ''}
                >
                  {size} см
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
