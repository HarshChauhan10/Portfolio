import React from 'react';
import Home from '../components/Home';
import Education from '../components/Education';
import Exprience from '../components/Exprience';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const MainPage = () => {
    return (
        <>
            <Home></Home>
            <Exprience></Exprience>
            <Education></Education>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );
};

export default MainPage;
