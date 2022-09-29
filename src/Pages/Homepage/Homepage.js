import React from "react";
import Functions from "../../Components/Functions/Functions";
import More from "../../Components/More/More";
import Pricings from "../../Components/Pricings/Pricings";
import Tell from "../../Components/Tell/Tell";
import Title from "../../Components/Title/Title";
import Topbar from "../../Components/Topbar/Topbar";

const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <Title />
      <More />
      <Pricings />
      <Functions />
      <Tell />
    </div>
  );
};

export default Homepage;
