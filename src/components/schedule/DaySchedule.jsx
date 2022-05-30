import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Appointments, DayView, Scheduler } from '@devexpress/dx-react-scheduler-material-ui';

function DaySchedule(currentDate, data) {
    return (
        <Paper>
            <Scheduler data={data} locale="ru-RU" loading={true}>
                <ViewState currentDate={currentDate} />
                <DayView startDayHour={9} endDayHour={14} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default DaySchedule;
