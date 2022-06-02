import Paper from '@mui/material/Paper';
import { Appointments, MonthView, Scheduler } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

function MonthSchedule(currentDate, data) {
    return (
        <Paper>
            <Scheduler data={data} height={660} locale="ru-RU" today={true}>
                <ViewState currentDate={currentDate} />
                <MonthView />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default MonthSchedule;
