import PropTypes from 'prop-types';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import DaySchedule from '../../../components/schedule/DaySchedule';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAppointments } from '../../pages/appointment/appointmentStore';
import HelmLoading from '../../../components/loading/HelmLoading';
import { Typography } from '@mui/material';

const DayScheduleCard = ({ isLoading }) => {
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

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                        Приём на сегодня:
                    </Typography>
                    {!loading ? DaySchedule(new Date(), data) : <HelmLoading />}
                </MainCard>
            )}
        </>
    );
};

DayScheduleCard.propTypes = {
    isLoading: PropTypes.bool
};

export default DayScheduleCard;
