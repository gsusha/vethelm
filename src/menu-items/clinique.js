// assets
import { DoctorIcon, PawIcon, PeopleIcon, ScheduleIcon, SyringeIcon } from 'assets/images/icons/index';

// constant
const icons = { DoctorIcon, PawIcon, PeopleIcon, ScheduleIcon, SyringeIcon };

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
            url: '/clients',
            icon: icons.PeopleIcon,
            breadcrumbs: false
        },
        {
            id: 'patients',
            title: 'Пациенты',
            type: 'item',
            url: '/patients',
            icon: icons.PawIcon,
            breadcrumbs: false
        },
        {
            id: 'doctors',
            title: 'Врачи',
            type: 'item',
            url: '/doctors',
            icon: icons.DoctorIcon,
            breadcrumbs: false
        },
        {
            id: 'appointment',
            title: 'Приём',
            type: 'item',
            url: '/appointment',
            icon: icons.ScheduleIcon,
            breadcrumbs: false
        },
        {
            id: 'stuff',
            title: 'Расходники',
            type: 'item',
            url: '/stuff',
            icon: icons.SyringeIcon,
            breadcrumbs: false
        }
    ]
};

export default clinique;
