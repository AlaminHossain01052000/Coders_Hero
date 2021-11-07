import { Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        // const admin={email:email}
        const admin = { email }  //both 10 and 11 line is same
        fetch("https://sheltered-fortress-52192.herokuapp.com/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make a admin</h1>
            <form onSubmit={handleMakeAdmin}>
                <input style={{ padding: "10px 10px", border: "1px solid rgba(0,0,0,0.5)", marginRight: "10px", borderRadius: "10px" }} placeholder="Email" type="email" id="standard-basic" label="Email" variant="Email" onBlur={handleOnBlur} />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;