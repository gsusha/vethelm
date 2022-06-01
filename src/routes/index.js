import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import PageRoutes from '../views/pages/PagesRoutes';
import NotFoundRoute from './NotFoundRoute';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, PageRoutes, NotFoundRoute], config.basename);
}
