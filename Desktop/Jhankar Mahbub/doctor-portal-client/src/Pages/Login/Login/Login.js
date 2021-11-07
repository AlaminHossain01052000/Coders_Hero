import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../../images/login.png';
const Login = () => {
    const [userData, setUserData] = useState({});
    const { loginUser, error, loading, user, handleGoogleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const handleCollectingData = e => {
        const dataField = e.target.name;
        const dataValue = e.target.value;
        const newLoginData = { ...userData };

        newLoginData[dataField] = dataValue;
        setUserData(newLoginData);

    }
    const handleSubmitting = e => {
        loginUser(userData.email, userData.password, history, location);

        e.preventDefault();
    }
    const googleSignIn = () => {
        handleGoogleSignIn(history, location);

    }
    return (
        <Container>
            <Grid container mt={5} sx={{ alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Login</Typography>
                    {
                        loading ? <CircularProgress /> : <form onSubmit={handleSubmitting}>
                            <TextField name="email" label="Email" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <TextField name="password" type="password" label="Password" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <Button sx={{ width: "75%", mt: 4 }} variant="contained" type="submit">
                                Login
                            </Button>
                        </form>
                    }


                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                    {
                        user?.email && <Alert severity="success">User Login success</Alert>
                    }
                    <Typography variant='h6' mt={4}>
                        Didn't registered ?Click
                        <NavLink style={{ margin: "0px 10px" }} to="/register">Here</NavLink>
                        to Register
                    </Typography>
                    <Button variant="contained" onClick={googleSignIn}>Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} width="75%" alt="" />

                </Grid>
            </Grid>
        </Container>

    );
};

export default Login;