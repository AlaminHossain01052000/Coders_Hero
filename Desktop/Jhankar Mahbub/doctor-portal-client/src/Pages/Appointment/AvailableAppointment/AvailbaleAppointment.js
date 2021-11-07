import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailbaleAppointment = (props) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const bookings = [
        {
            id: 1,
            name: "Oral Surgery",
            time: "6.00 PM - 8.00 PM",
            space: 10
        },
        {
            id: 2,
            name: "Teeth Cleaning",
            time: "8.00 PM - 9.00 PM",
            space: 10
        },
        {
            id: 3,
            name: "Teeth Replacing",
            time: "9.00 PM - 10.00 PM",
            space: 10
        },
        {
            id: 4,
            name: "Oxio Surgery",
            time: "5.00 PM - 6.00 PM",
            space: 10
        },
        {
            id: 5,
            name: "Thorax Surgery",
            time: "4.30 PM - 5.30 PM",
            space: 10
        },
        {
            id: 6,
            name: "Ear Surgery",
            time: "3.00 PM - 4.00 PM",
            space: 10
        }
    ]
    return (
        <>
            <Box>
                <Typography sx={{ my: 3, fontWeight: "500" }} variant={'h5'} color="text.secondary">Hello Available Appointment {props.date.toDateString()}</Typography>
                {
                    bookingSuccess && <Alert severity="success">Appointment Successfully Booked</Alert>
                }
                <Container>
                    <Grid container spacing={2}>


                        {
                            bookings.map(booking => <Booking
                                date={props.date}
                                key={booking.id}
                                booking={booking}
                                setBookingSuccess={setBookingSuccess}
                            ></Booking>)
                        }




                    </Grid>
                </Container>
            </Box>

        </>
    );
};

export default AvailbaleAppointment;