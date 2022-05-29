import PropTypes from 'prop-types';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import DaySchedule from '../../../components/schedule/DaySchedule';

const DayScheduleCard = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <DaySchedule />
                </MainCard>
            )}
        </>
    );
};

DayScheduleCard.propTypes = {
    isLoading: PropTypes.bool
};

export default DayScheduleCard;
