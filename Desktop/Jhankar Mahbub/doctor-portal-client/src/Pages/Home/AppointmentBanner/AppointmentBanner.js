import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from "../../../images/doctor.png";
import appointment from "../../../images/appointment-bg.png";

const AppointmentBanner = () => {
    const horizentalAlign = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const backgroundBanner = {
        backgroundImage: `url(${appointment})`,
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundBlendMode: 'darken'
    }
    return (
        <Box sx={{ marginTop: "100px", ...backgroundBanner, marginBottom: "100px" }}>

            <Container>
                <Grid container spacing={4} style={{ horizentalAlign }}>
                    <Grid item xs={8} lg={4}>
                        <CardMedia
                            component="img"

                            image={doctor}
                            alt="green iguana"
                            sx={{ width: "100%", height: "500px", marginTop: "-140px" }}
                        />

                    </Grid>
                    <Grid item lg={8} sx={{ textAlign: "left" }}>
                        <Typography variant={'h5'} sx={{ color: "white" }}>Appointment</Typography>
                        <Typography variant={'h5'} sx={{ color: "gray" }} my={4}>Make an Appointment Today</Typography>
                        <Typography sx={{ color: "lightGreen" }} variant={'h5'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.</Typography>
                        <Button variant="contained" sx={{ backgroundColor: "lime", marginTop: "20px" }}>Learn More</Button>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;