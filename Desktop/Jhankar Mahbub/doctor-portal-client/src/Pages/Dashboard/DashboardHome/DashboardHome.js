import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../../Shared/Calender/Calender';
import { Box } from '@mui/system';
import DashBoardAppointments from '../DashboardAppointments/DashBoardAppointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={4} sm={12} lg={4} xs={12}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item md={8} sm={12} lg={8} xs={12}>
                    <DashBoardAppointments date={date}></DashBoardAppointments>
                </Grid>
            </Grid>

        </Box >
    );
};

export default DashboardHome;