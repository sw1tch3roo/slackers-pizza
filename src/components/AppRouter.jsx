import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import { publicRoutes } from '../routes';

const AppRouter = () => {
  return (
    <Routes>
      {/* Родительский шаблон */}
      <Route path="/" element={<MainLayout />} exact={true}>
        {publicRoutes.map(({ path, element, exact }, key) => {
          return <Route path={path} element={element} exact={exact} key={key} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
