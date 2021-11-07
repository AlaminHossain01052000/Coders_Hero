import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Footer/Footer';
import OpeningHours from '../OpeningHours/OpeningHours';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <OpeningHours />
            <Services></Services>
            <Exceptional />
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;