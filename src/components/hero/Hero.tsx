import React from "react";
import Header from '../header/Header';
import Films from "../films/Films";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const Hero = () => {
  return (
    <>
      <ErrorBoundary>
        <Header/>
        <Films/>
        <Footer/>
      </ErrorBoundary>
    </>
  )
};

export default Hero;




