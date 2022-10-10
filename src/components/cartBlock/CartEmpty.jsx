import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartImage from '../../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятнее всего, пицца ещё не была заказана.
          <br />
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <img src={emptyCartImage} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
