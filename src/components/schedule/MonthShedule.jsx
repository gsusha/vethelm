import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Appointments, Scheduler, MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

function MonthSchedule(currentDate, data) {
    return (
        <Paper>
            <Scheduler data={data} height={660} locale="ru-RU">
                <ViewState currentDate={currentDate} />
                <MonthView startDayHour={9} endDayHour={19} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default MonthSchedule;
