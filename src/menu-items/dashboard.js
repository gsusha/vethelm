// assets
import { HospitalIcon } from 'assets/images/icons/index';

// constant
const icons = { HospitalIcon };

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
            icon: icons.HospitalIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
