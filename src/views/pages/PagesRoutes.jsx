import MainLayout from '../../layout/MainLayout';
import Loadable from '../../ui-component/Loadable';
import { lazy } from 'react';
import DoctorDetail from './doctors/detail/DoctorDetail';
import ClientDetail from './clients/detail/ClientDetail';
import PatientDetail from './patients/detail/PatientDetail';
import StuffDetail from './stuff/detail/StuffDetail';
import ServiceDetail from './services/detail/ServiceDetail';

const ProfilePage = Loadable(lazy(() => import('./profile/ProfilePage')));
const AppointmentPage = Loadable(lazy(() => import('./appointment/AppointmentPage')));
const ShiftsPage = Loadable(lazy(() => import('./shifts/ShiftsPage')));

const ClientsList = Loadable(lazy(() => import('./clients/list/ClientsTable')));
const DoctorsList = Loadable(lazy(() => import('./doctors/list/DoctorsTable')));
const PatientsList = Loadable(lazy(() => import('./patients/list/PatientsTable')));
const StuffList = Loadable(lazy(() => import('./stuff/list/StuffTable')));
const ServicesList = Loadable(lazy(() => import('./services/list/ServicesTable')));

const PagesRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/profile',
            element: <ProfilePage />
        },
        {
            path: '/appointment',
            element: <AppointmentPage />
        },
        {
            path: '/clients',
            element: <ClientsList />
        },
        {
            path: '/clients/:id',
            element: <ClientDetail />
        },
        {
            path: '/doctors',
            element: <DoctorsList />
        },
        {
            path: '/doctors/:id',
            element: <DoctorDetail />
        },
        {
            path: '/patients',
            element: <PatientsList />
        },
        {
            path: '/patients/:id',
            element: <PatientDetail />
        },
        {
            path: '/stuff',
            element: <StuffList />
        },
        {
            path: '/stuff/:id',
            element: <StuffDetail />
        },
        {
            path: '/services',
            element: <ServicesList />
        },
        {
            path: '/services/:id',
            element: <ServiceDetail />
        },
        {
            path: '/shifts',
            element: <ShiftsPage />
        }
    ]
};

export default PagesRoutes;
