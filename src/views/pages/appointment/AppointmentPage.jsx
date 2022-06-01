import MainCard from '../../../ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import WeekSchedule from '../../../components/schedule/WeekSchedule';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from './appointmentStore';
import HelmLoading from '../../../components/loading/HelmLoading';

function AppointmentPage() {
    const dispatch = useDispatch();
    const appointments = useSelector((state) => state.pages.appointments);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getAppointments()).then(() => setLoading(false));
    }, [dispatch]);

    const data =
        !loading &&
        appointments.map((item) => {
            return {
                id: item.id,
                title: item.description,
                startDate: new Date(item.create_data),
                endDate: new Date(item.end_data)
            };
        });

    return <MainCard title="Приём">{!loading ? WeekSchedule(new Date(), data) : <HelmLoading />}</MainCard>;
}

export default AppointmentPage;
