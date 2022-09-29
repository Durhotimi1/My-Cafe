import React from "react";
import About from "../../Components/About/About";
import Topbar from "../../Components/Topbar/Topbar";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Topbar />
      <About />
    </div>
  );
};

export default AboutPage;
