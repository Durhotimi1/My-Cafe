import React from "react";
import Plans from "../../Components/Plans/Plans";
import Topbar from "../../Components/Topbar/Topbar";
import "./PricingsPage.css";

const Pricings = () => {
  return (
    <div className="pricingspage">
      <Topbar />
      <Plans />
    </div>
  );
};

export default Pricings;
