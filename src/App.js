import React from 'react';

import PizzaHeader from './components/header/PizzaHeader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <PizzaHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/cart" element={<Cart />} exact={true} />
          <Route path="*" element={<NotFound />} exact={true} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
