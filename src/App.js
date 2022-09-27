import React from 'react';

import PizzaHeader from './components/header/PizzaHeader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState(''); // значение в инпуте (компонент Search)

  return (
    <div className="wrapper">
      <PizzaHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} exact={true} />
          <Route path="/cart" element={<Cart />} exact={true} />
          <Route path="*" element={<NotFound />} exact={true} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
