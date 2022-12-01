import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartImage from '../../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="container container--cart">
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятнее всего, пицца ещё не была заказана.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={emptyCartImage} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  </div>
);

export default CartEmpty;
