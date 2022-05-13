// assets
import { IconDashboard, IconHelp, IconUsers } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconUsers, IconHelp };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const clinique = {
    id: 'clinique',
    title: 'Клиника',
    type: 'group',
    children: [
        {
            id: 'clients',
            title: 'Клиенты',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'patients',
            title: 'Пациенты',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        {
            id: 'doctors',
            title: 'Врачи',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default clinique;
