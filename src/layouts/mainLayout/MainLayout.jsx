import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/PizzaHeader';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* рендерим все динамические роуты */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
