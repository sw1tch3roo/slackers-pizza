import { SHOP_ROUTE, CART_ROUTE, PIZZA_ROUTE } from './utils/consts';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';

export const publicRoutes: Array<{
  path: string | any;
  element: JSX.Element;
}> = [
  { path: SHOP_ROUTE, element: <Home /> },
  { path: CART_ROUTE, element: <Cart /> },
  { path: PIZZA_ROUTE, element: <FullPizza /> },
  { path: '*', element: <NotFound /> },
];
