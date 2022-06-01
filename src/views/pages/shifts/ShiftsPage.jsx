import MainCard from '../../../ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShifts } from './store/shiftsStore';
import HelmLoading from '../../../components/loading/HelmLoading';
import MonthSchedule from '../../../components/schedule/MonthShedule';

function ShiftPage() {
    const dispatch = useDispatch();
    const shifts = useSelector((state) => state.pages.shifts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getShifts()).then(() => setLoading(false));
    }, [dispatch]);

    const data =
        !loading &&
        shifts.map((item) => {
            return {
                id: item.id,
                title: item.id,
                startDate: new Date(item.start_time),
                endDate: new Date(item.end_time)
            };
        });

    return <MainCard title="Смены">{!loading ? MonthSchedule(new Date(), data) : <HelmLoading />}</MainCard>;
}

export default ShiftPage;
