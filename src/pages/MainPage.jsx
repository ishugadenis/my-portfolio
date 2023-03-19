import React from "react";
import Home from "../components/home";
import Aboutus from "../components/Aboutus";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

const MainPage = () => {
  return <React.Fragment>
    <Navbar />
    <Home />
    <Projects />
    <Aboutus />
    <ContactUs />
  </React.Fragment>;
};

export default MainPage;
