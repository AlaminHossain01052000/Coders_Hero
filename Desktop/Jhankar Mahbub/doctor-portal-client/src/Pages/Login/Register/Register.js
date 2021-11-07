import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../../images/login.png';

const Register = () => {
    const [userData, setUserData] = useState({});
    const { registerUser, loading, error, user } = useAuth();
    const history = useHistory();
    const handleCollectingData = e => {
        const dataField = e.target.name;
        const dataValue = e.target.value;
        const newLoginData = { ...userData };

        newLoginData[dataField] = dataValue;
        setUserData(newLoginData);

    }
    const handleSubmitting = e => {
        if (userData.password === userData.password2) {


            registerUser(userData?.email, userData?.password, history, userData.userName);


        }

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container mt={5} sx={{ alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Login</Typography>
                    {
                        loading ? <CircularProgress /> : <form onSubmit={handleSubmitting}>
                            <TextField name="userName" label="User Name" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <TextField name="email" label="Email" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <TextField name="password" type="password" label="Password" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <TextField name="password2" type="password" label="Re-enter Password" variant="standard" sx={{ width: "75%", m: 1 }}
                                onChange={handleCollectingData}
                            />
                            <Button sx={{ width: "75%", mt: 4 }} variant="contained" type="submit">
                                Register
                            </Button>
                        </form>
                    }
                    {
                        error && <Alert severity="error">Failed to Register</Alert>
                    }
                    {
                        user?.email && <Alert severity="success">User Registered Successfully</Alert>
                    }
                    <Typography variant={'h6'} mt={4}>
                        Alreaday registered ?Click
                        <NavLink style={{ margin: "0px 10px" }} to="/login">Here</NavLink>
                        to login
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} width="75%" alt="" />

                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;