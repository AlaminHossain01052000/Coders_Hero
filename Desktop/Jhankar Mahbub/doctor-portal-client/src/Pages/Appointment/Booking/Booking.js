import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant={'h6'} sx={{ fontSize: 14, color: "#10ac84" }} gutterBottom>
                            {name}
                        </Typography>

                        <Typography sx={{ mb: 1.5, fontWeight: "500" }} variant={'h5'} color="text.secondary">
                            {time}
                        </Typography>
                        <Typography sx={{ color: "#ff6b6b" }} variant={'h6'}>
                            {space} spaces available

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" sx={{ margin: "auto", backgroundColor: "#feca57" }} onClick={handleOpen}>Book Appointment</Button>
                    </CardActions>
                </Card>
            </Grid >
            <BookingModal
                open={open}
                booking={booking}
                handleClose={handleClose}
                date={date}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>
    );
};

export default Booking;