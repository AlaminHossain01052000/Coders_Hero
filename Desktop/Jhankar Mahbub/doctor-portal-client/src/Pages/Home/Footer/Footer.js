import { Button, Container, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    const contactHeadingTitle = {
        fontSize: "20px",
        fontWeight: "500",
        color: "#ff9f43"
    }
    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    });
    return (
        <Box my={3}>
            <Container>
                <Box className="footer-lists">
                    <Box>
                        <ul>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant={'h3'} sx={contactHeadingTitle}>Services</Typography>
                        <ul>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>

                        </ul>
                    </Box>
                    <Box>
                        <Typography variant={'h3'} sx={contactHeadingTitle}>Oral Health</Typography>
                        <ul>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography sx={contactHeadingTitle}>
                            Our Address
                        </Typography>
                        <Typography sx={{ color: "#a7aaa9", margin: "10px 0", fontWeight: "500" }}>
                            New Work -101010 Hudson Yards
                        </Typography>
                        <div style={{ margin: "42px 0px" }}>
                            <div>
                                <i className="fab fa-facebook" style={{ color: "#a7aaa9", margin: "10px 0", fontWeight: "500", fontSize: "30px" }}></i>
                                <i className="fab fa-google" style={{ color: "#a7aaa9", margin: "10px 30px", fontWeight: "500", fontSize: "30px" }}></i>
                                <i className="fab fa-twitter" style={{ color: "#a7aaa9", margin: "10px 0", fontWeight: "500", fontSize: "30px" }}></i>
                            </div>
                        </div>
                        <div>
                            <Typography sx={{ color: "#a7aaa9", margin: "10px 0", fontWeight: "500" }}>
                                Call Now
                            </Typography>
                            <MyButton variant="contained">01912131415</MyButton>
                        </div>
                    </Box>
                </Box>

            </Container>
            <div style={{ marginTop: "30px" }}>
                <Typography sx={{ fontSize: "12px", color: "#a7aaa9", fontWeight: "500" }}>
                    Copyright 2021 All Right Reserved
                </Typography>
            </div>
        </Box>
    );
};

export default Footer;