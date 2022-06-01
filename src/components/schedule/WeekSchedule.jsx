import Paper from '@mui/material/Paper';
import { Appointments, Scheduler, WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

function WeekSchedule(currentDate, data) {
    return (
        <Paper>
            <Scheduler data={data} height={660} locale="ru-RU">
                <ViewState currentDate={currentDate} />
                <WeekView startDayHour={8} endDayHour={22} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default WeekSchedule;
