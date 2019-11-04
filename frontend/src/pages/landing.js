import React from 'react';

import Nav from '../components/global/Nav';
import Header from '../components/landing/Header';
import Features from '../components/landing/Features';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import CTA from '../components/global/CTA';
import Footer from '../components/global/Footer';

const Landing = () => {
    return(
        <div>
            <Nav />
            <Header />
            <Features /> 
            <About /> 
            <Contact />
            <CTA /> 
            <Footer />
        </div>
    );
}

export default Landing;