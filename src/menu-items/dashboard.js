// assets
import { IconDashboard, IconHome } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Основное',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Главная',
            type: 'item',
            url: '/',
            icon: icons.IconHome,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
