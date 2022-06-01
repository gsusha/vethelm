import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const NotFoundPage = Loadable(lazy(() => import('components/NotFound')));

// ==============================|| MAIN ROUTING ||============================== //

const NotFoundRoute = {
    path: '*',
    element: <MainLayout />,
    children: [
        {
            path: '*',
            element: <NotFoundPage />
        }
    ]
};

export default NotFoundRoute;
