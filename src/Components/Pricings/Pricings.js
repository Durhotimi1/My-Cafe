import React from "react";
import "./Pricings.css";
import img1 from "../../Assets/food1.jpg";
import img2 from "../../Assets/food2.jpg";
import img3 from "../../Assets/food3.jpg";

const Pricings = () => {
  return (
    <div className="pricings">
      <h2>Show Your Pricings Plan</h2>
      <p className="let">
        Let Your Visitors Compare and Choose The Most Suitable Dish
      </p>
      <div className="imag">
        <div>
          <img src={img1} alt="" />
          <h3>Pasta</h3>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
          <br />
          <p className="doll">$30</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <h3>Pasta</h3>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
          <br />
          <p className="doll">$30</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <h3>Pasta</h3>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
          <br />
          <p className="doll">$30</p>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
