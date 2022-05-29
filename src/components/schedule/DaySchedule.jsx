import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Appointments, DayView, Scheduler } from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-05-26';
const schedulerData = [
    { startDate: '2022-05-26T09:45', endDate: '2022-05-26T11:00', title: 'Подстричь когти собаке' },
    { startDate: '2022-05-26T12:00', endDate: '2022-05-26T13:30', title: 'Осмотр кота' }
];

function DaySchedule() {
    return (
        <Paper>
            <Scheduler data={schedulerData}>
                <ViewState currentDate={currentDate} />
                <DayView startDayHour={9} endDayHour={14} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default DaySchedule;
