import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <CardMedia
                    component="img"

                    image={img}
                    alt="green iguana"
                    sx={{ width: "auto", height: "100px", margin: "0 auto" }}
                />
                <CardContent>

                    <Typography variant={'h5'} my={2}>
                        {name}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>
            </Box>
        </Grid >
    );
};

export default Service;