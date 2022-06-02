import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import DutyCard from './DutyCard';
import AverageBillCard from './AverageBillCard';
import DayScheduleCard from './DayScheduleCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../../pages/appointment/appointmentStore';
import { getShifts } from '../../pages/shifts/store/shiftsStore';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAppointments()).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <AverageBillCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <DayScheduleCard isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DutyCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
