// assets
import { DoctorIcon, PawIcon, PeopleIcon, ScheduleIcon, ServicesIcon, ShiftsIcon, SyringeIcon } from 'assets/images/icons/index';

// constant
const icons = { DoctorIcon, PawIcon, PeopleIcon, ScheduleIcon, SyringeIcon, ServicesIcon, ShiftsIcon };

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
            id: 'shifts',
            title: 'Рабочий график',
            type: 'item',
            url: '/shifts',
            icon: icons.ShiftsIcon,
            breadcrumbs: false
        },
        {
            id: 'services',
            title: 'Услуги',
            type: 'item',
            url: '/services',
            icon: icons.ServicesIcon,
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
