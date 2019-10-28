import React, { Component } from 'react';

import Nav from '../components//global/Nav';
import Header from '../components/main/Header';
import Features from '../components/main/Features';
import About from '../components/main/About';
import Contact from '../components/main/Contact';
import CTA from '../components/global/CTA';
import Footer from '../components/global/Footer';

class Landing extends Component {
    render(){
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
}

export default Landing;