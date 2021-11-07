import React from 'react';

import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logoutUser } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, padding: 0 }}
                        >
                            <i className="fas fa-bars"></i>

                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/"><Button color="inherit" sx={{ color: "white", textDecoration: "none" }}>Home</Button></Link>
                        </Typography>
                        <Link to="/appointment"><Button color="inherit" sx={{ color: "white", textDecoration: "none" }}>Appointment</Button></Link>
                        {
                            user.email ?
                                <Box>
                                    <NavLink to="/home">
                                        <Button onClick={logoutUser} sx={{ color: "white" }}>Logout</Button>
                                    </NavLink>
                                    <NavLink to="/dashboard">
                                        <Button sx={{ color: "white" }}>Dashboard</Button>
                                    </NavLink>
                                </Box>

                                :
                                <NavLink to="/login">
                                    <Button sx={{ color: "white" }}>Login</Button>

                                </NavLink>

                        }

                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    );
};

export default Navigation;