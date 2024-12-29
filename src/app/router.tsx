import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage/ui/Page';
import NotFoundPage from '../pages/NotFoundPage/ui/Page';
import { pageRoutes } from './routes';

const router = createBrowserRouter([
  {
    // element: <CommonLayout />,
    children: [
      { path: pageRoutes.home.url, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
