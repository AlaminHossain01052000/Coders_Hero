import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OpeningHours = () => {
    return (
        <Container>
            <Box sx={{ width: "80%", margin: "0 auto" }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{ backgroundColor: "#10ac84", display: "flex", alignItems: "center", paddingBottom: "25px" }}>
                        <div>
                            <i className="fas fa-clock" style={{ color: "white", fontSize: "60px" }}></i>
                        </div>
                        <div style={{ textAlign: "left", marginLeft: "20px" }}>
                            <Typography variant={'h5'} sx={{ color: "white", fontSize: "18px", fontWeight: "500" }}>
                                Opening Hours
                            </Typography>
                            <Typography variant={'h6'} sx={{ color: "white", fontSize: "12px", fontWeight: "500" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item lg={3} mx={3} md={6} sm={12} xs={12} sx={{ backgroundColor: "#576574", display: "flex", alignItems: "center", paddingBottom: "25px" }}>
                        <div>
                            <i className="fas fa-map-marker-alt" style={{ color: "white", fontSize: "60px" }}></i>

                        </div>
                        <div style={{ textAlign: "left", marginLeft: "20px" }}>
                            <Typography variant={'h5'} sx={{ color: "white", fontSize: "18px", fontWeight: "500" }}>
                                Visit Us
                            </Typography>
                            <Typography variant={'h6'} sx={{ color: "white", fontSize: "12px", fontWeight: "500" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} sx={{ backgroundColor: "#10ac84", display: "flex", alignItems: "center", paddingBottom: "25px" }}>
                        <div>
                            <i className="fas fa-phone" style={{ color: "white", fontSize: "60px" }}></i>
                            <i className=""></i>
                        </div>
                        <div style={{ textAlign: "left", marginLeft: "20px" }}>
                            <Typography variant={'h5'} sx={{ color: "white", fontSize: "18px", fontWeight: "500" }}>
                                Contact Us
                            </Typography>
                            <Typography variant={'h6'} sx={{ color: "white", fontSize: "12px", fontWeight: "500" }}>
                                01913121415
                            </Typography>
                        </div>
                    </Grid>

                </Grid>


            </Box >
        </Container >
    );
};

export default OpeningHours;