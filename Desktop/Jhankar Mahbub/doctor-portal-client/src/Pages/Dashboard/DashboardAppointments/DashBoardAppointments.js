import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardAppointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const { user, token } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date, user.email, token])

    return (
        <div>
            <h1>Dashboards Appointment {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Schedule</TableCell>
                            <TableCell align="right">Treatment</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.treatmentName}</TableCell>
                                <TableCell align="right">Hello</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashBoardAppointments;