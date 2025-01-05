import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { pageRoutes } from './routes';
import { defaultLayout } from './layouts/defaultLayout';
import NotFoundPage from '../pages/NotFoundPage/ui/Page';

const router = createBrowserRouter([
  {
    element: defaultLayout,
    children: [
      { path: pageRoutes.home.url, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
