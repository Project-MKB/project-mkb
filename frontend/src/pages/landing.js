import React from "react";
import Nav from "../components/global/Nav";
import Header from "../components/landing/Header";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Footer from "../components/global/Footer";


const Landing = () => {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <About />
      <Features />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
