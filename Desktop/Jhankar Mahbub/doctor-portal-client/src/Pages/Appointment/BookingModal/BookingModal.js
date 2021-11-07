import { Fade, Modal, Typography, Backdrop, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from "../../../hooks/useAuth";

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { user } = useAuth();

    const patientInfo = {
        patientName: user?.displayName,
        patientEmail: user?.email,
        patientPhone: ""
    };
    const [bookingInfo, setBookingInfo] = useState(patientInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo);

    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleFormSubmitting = e => {
        e.preventDefault();
        const bookedAppointment = {
            ...bookingInfo,
            treatmentName: booking.name,
            time: date.toLocaleDateString()


        }
        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedAppointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleClose();
                }
            })


    }
    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {booking.name}
                        </Typography>
                        <form onSubmit={handleFormSubmitting}>
                            <TextField
                                sx={{ width: "90%", mb: 1 }}
                                id="outlined-size-small"
                                defaultValue={booking.time}
                                disabled

                                size="small"
                            />
                            <TextField
                                sx={{ width: "90%", mb: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                name="patientName"
                                size="small"
                                required
                            />
                            <TextField
                                sx={{ width: "90%", mb: 1 }}
                                id="outlined-size-small"
                                placeholder="phone number"
                                onBlur={handleOnBlur}
                                name="patientPhone"
                                size="small"
                                required
                            />
                            <TextField
                                sx={{ width: "90%", mb: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name="patientEmail"
                                size="small"
                                required
                            />
                            <TextField
                                sx={{ width: "90%", mb: 1 }}
                                id="outlined-size-small"
                                defaultValue={date}
                                disabled

                                size="small"
                            />
                            <Button sx={{ margin: "0 25%", width: "150px" }} type="submit" variant="contained">Book Now</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default BookingModal;