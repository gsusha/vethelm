import PropTypes from 'prop-types';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import DaySchedule from '../../../components/schedule/DaySchedule';
import { useSelector } from 'react-redux';
import HelmLoading from '../../../components/loading/HelmLoading';
import { Typography } from '@mui/material';

const DayScheduleCard = ({ isLoading }) => {
    const appointments = useSelector((state) => state.pages.appointments);

    const data =
        !isLoading &&
        appointments &&
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
                    {!isLoading ? DaySchedule(new Date(), data) : <HelmLoading />}
                </MainCard>
            )}
        </>
    );
};

DayScheduleCard.propTypes = {
    isLoading: PropTypes.bool
};

export default DayScheduleCard;
