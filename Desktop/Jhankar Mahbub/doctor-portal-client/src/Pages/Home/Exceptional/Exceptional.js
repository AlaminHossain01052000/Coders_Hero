import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from "../../../images/treatment.png"
const Exceptional = () => {
    return (
        <Box my={3}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid lg={6} md={12} sma={12} item>
                        <img src={treatment} alt="treatment" width="100%" height="500px" />
                    </Grid>
                    <Grid lg={6} md={12} sm={12} item sx={{ textAlign: "left" }}>
                        <Typography variant={'h3'}>
                            Exceptional Dental <br /> Care, On Your Terms
                        </Typography>
                        <Typography variant={'h6'} my={5}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos eius placeat necessitatibus id, et voluptatum deserunt recusandae voluptatibus? Eum quia repellat excepturi alias? Sed provident officiis culpa dolor unde dignissimos?
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: "#10ac84" }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Exceptional;