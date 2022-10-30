import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams(); // выцепляем динамический параметр из адресной строки
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://632cad725568d3cad88ad212.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error with getting data!');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    // делаем отрисовку до загрузки пиццы
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.image} alt="pizza" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
