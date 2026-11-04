import React from 'react';
import Home from '../components/Home';
import Education from '../components/Education';
import Exprience from '../components/Exprience';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const MainPage = () => {
    return (
        <>
            <Home></Home>
            <Exprience></Exprience>
            <Skills></Skills>
            <Education></Education>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );
};

export default MainPage;
