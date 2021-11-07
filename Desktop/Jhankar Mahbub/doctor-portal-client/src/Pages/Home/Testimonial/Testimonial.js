import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {


    return (
        <Box mb={6}>
            <Container>
                <Box sx={{ textAlign: "left" }} my={6}>

                    <Typography variant={'h6'} sx={{ color: "#1dd1a1", fontWeight: "600" }} mb={3}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant={'h3'} sx={{ fontWeight: 500 }}>
                        What Our Patients <br /> Says
                    </Typography>
                </Box>
                <Grid
                    spacing={2}
                    container



                >
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Typography sx={{
                            textAlign: "justify",
                            textJustify: "inter - word"
                        }}>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?
                            Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?

                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", width: "70%", margin: "35px auto" }}>
                            <div>
                                <img src={people1} alt="" />
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <Typography>William Harry</Typography>
                                <Typography>California</Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Typography sx={{
                            textAlign: "justify",
                            textJustify: "inter - word"
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?
                            Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", width: "70%", margin: "35px auto" }}>
                            <div>
                                <img src={people2} alt="" />
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <Typography>William Harry</Typography>
                                <Typography>California</Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Typography sx={{
                            textAlign: "justify",
                            textJustify: "inter - word"
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?
                            Culpa voluptas minus odio natus minima, eius mollitia deserunt animi sint libero?
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", width: "70%", margin: "35px auto" }}>
                            <div>
                                <img src={people3} alt="" />
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <Typography>William Harry</Typography>
                                <Typography>California</Typography>
                            </div>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Testimonial;