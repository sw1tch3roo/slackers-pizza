import { SHOP_ROUTE, CART_ROUTE, PIZZA_ROUTE } from './utils/consts';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';

export const publicRoutes = [
  { path: SHOP_ROUTE, element: <Home />, exact: true },
  { path: CART_ROUTE, element: <Cart />, exact: true },
  { path: PIZZA_ROUTE, element: <FullPizza />, exact: true },
  { path: '*', element: <NotFound />, exact: true },
];
