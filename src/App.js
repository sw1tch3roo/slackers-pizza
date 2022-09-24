import React from 'react';

import PizzaHeader from './components/header/PizzaHeader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <PizzaHeader />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} exact={true} />
              <Route path="/cart" element={<NotFound />} exact={true} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
