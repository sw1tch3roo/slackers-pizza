import React from 'react';

import PizzaHeader from './components/header/PizzaHeader';
import AppRouter from './components/AppRouter';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <PizzaHeader />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
