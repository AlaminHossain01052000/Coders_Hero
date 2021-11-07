import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
const Banner = () => {
    const backgroundBanner = {
        backgroundImage: `url(${bg})`,


    }
    return (
        <Box my={5} sx={{ ...backgroundBanner }}>
            <Container>
                <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Grid item lg={8} sx={{ textAlign: "left" }}>
                        <Typography variant={'h4'} sx={{ color: "black", fontWeight: "500" }}>Your New Smile <br /> Start Here</Typography>
                        <Typography variant={'h5'} sx={{ color: "gray" }} my={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis </Typography>

                        <Button variant="contained" sx={{ backgroundColor: "lime", marginTop: "20px" }}>Learn More</Button>
                    </Grid>
                    <Grid item lg={4}>
                        <CardMedia
                            component="img"

                            image={chair}
                            alt="green iguana"
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;