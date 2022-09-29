import React from "react";
import "./More.css";
import img1 from "../../Assets/chicker.jpg";

const More = () => {
  return (
    <div className="more">
      <div>
        <img className="img1" src={img1} alt="" />
      </div>
      <div>
        <h2>Tell More About Your Project</h2>
        <h5>Add Subsects in your Project And Other Things</h5>
        <p className="sec2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Quidem officiis nulla obcaecati commodi quos fuga sapiente, <br />{" "}
          earum velit reprehenderit, modi facere voluptatem nam consequatur.{" "}
          <br /> Veniam, nam. Deserunt commodi quam fuga!
        </p>
      </div>
    </div>
  );
};

export default More;
