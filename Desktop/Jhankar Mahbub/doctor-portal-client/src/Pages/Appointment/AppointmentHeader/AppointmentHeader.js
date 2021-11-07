import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={chair} alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;