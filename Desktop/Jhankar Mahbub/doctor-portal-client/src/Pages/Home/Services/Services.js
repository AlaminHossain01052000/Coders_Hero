import React from 'react';
import Fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import { Container, Grid, Typography } from '@mui/material';
import Service from '../Service/Service';


const Services = () => {
    const services = [
        {
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione fugit eligendi esse ducimus?",
            img: Fluoride
        },
        {
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione fugit eligendi esse ducimus?",
            img: cavity
        },
        {
            name: "Teath Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione fugit eligendi esse ducimus?",
            img: whitening
        },
    ]
    return (
        <div>
            <Typography variant={'h1'} mt={5} sx={{ fontSize: "20px", fontWeight: "600", color: "lightgreen" }}>Our Services</Typography>
            <Typography variant={'h1'} mb={4} mt={2} sx={{ fontSize: "30px", fontWeight: "500" }}>Services We Provide</Typography>
            <Container>
                <Grid container spacing={2} >
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        >

                        </Service>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Services;