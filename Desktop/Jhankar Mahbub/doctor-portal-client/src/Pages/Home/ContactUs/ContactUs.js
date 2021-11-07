import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contact from "../../../images/appointment-bg.png";
const ContactUs = () => {
    const contactBg = {
        backgroundImage: `url(${contact})`,
        backgroundColor: "rgb(87, 101, 116)",
        backgroundBlendMode: "darken"
    }
    return (
        <Container sx={{ ...contactBg, paddingTop: "20px" }}>
            <Typography variant={'h6'} sx={{ color: "#48dbfb", fontWeight: "500" }}>Contact Us</Typography>
            <Typography variant={'h4'} sx={{ color: "white", fontWeight: "400" }}>Always Connect With Us</Typography>
            <Box sx={{
                display: "flex", flexDirection: "column",
                width: "70%", margin: "20px auto"
            }}>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="Email Address"
                    sx={{ margin: "15px", backgroundColor: "white" }}


                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="Subject"
                    sx={{ margin: "15px", backgroundColor: "white" }}

                />
                <textarea
                    placeholder="Description"
                    rows="6" cols="50"
                    style={{ margin: "15px" }}
                >
                </textarea>
                <Button type="submit" variant="contained" sx={{ width: "14%", paddingY: "10px", margin: "30px auto", backgroundColor: "#ff6b6b" }}>Submit</Button>
            </Box>


        </Container >
    );
};

export default ContactUs;