import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailbaleAppointment from '../AvailableAppointment/AvailbaleAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailbaleAppointment date={date}></AvailbaleAppointment>
        </div>
    );
};

export default Appointment;