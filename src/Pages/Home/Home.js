import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import SingleService from './SingleService';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SingleService></SingleService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;