import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface pizzaItem {
  image: string;
  name: string;
  price: number;
}

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<pizzaItem>();

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
    return <>Загрузка...</>; // возвращаем реакт-элемент
  }

  return (
    <div className="container">
      <img src={pizza.image} alt="pizza" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
