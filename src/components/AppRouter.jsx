import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element, exact }, key) => {
        return <Route path={path} element={element} exact={exact} key={key} />;
      })}
    </Routes>
  );
};

export default AppRouter;
