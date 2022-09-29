import React from "react";
import "./Functions.css";
import { FaHotdog } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { GiWineGlass } from "react-icons/gi";

const Functions = () => {
  return (
    <div className="functions">
      <h2>Your Main Functions And Benefit</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className="icons">
        <div>
          <FaHotdog className="hot"></FaHotdog>
          <h3>Hot Dog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Incidunt est facilis repellendus quaerat perferendis?
          </p>
        </div>
        <div>
          <FaFish className="hot" />
          <h3>Grilled Fish</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Incidunt est facilis repellendus quaerat perferendis?
          </p>
        </div>
        <div>
          <FaMugHot className="hot" />
          <h3>Hot Tea</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Incidunt est facilis repellendus quaerat perferendis?
          </p>
        </div>
        <div>
          <GiWineGlass className="hot" />
          <h3>Bottle of Wine</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Incidunt est facilis repellendus quaerat perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Functions;
