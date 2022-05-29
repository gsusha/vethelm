import MainCard from '../../../ui-component/cards/MainCard';
import React, { useEffect, useState } from 'react';
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

    const data = appointments.map((item) => {
        return {
            id: item.id,
            title: item.id,
            startDate: new Date(item.start_time),
            endDate: new Date(item.end_time)
        };
    });

    return !loading ? <MainCard title="Приём">{WeekSchedule(new Date(), data)}</MainCard> : <HelmLoading />;
}

export default AppointmentPage;
