import React from "react";
import "./Chef.css";
import img1 from "../../Assets/chef1.jpg";
import img2 from "../../Assets/chef2.jpg";
import img3 from "../../Assets/chef3.jpg";
import img4 from "../../Assets/chef4.jpg";
import img5 from "../../Assets/chef5.jpg";
import img6 from "../../Assets/chef6.jpg";
import img7 from "../../Assets/chef7.jpg";
import img8 from "../../Assets/chef8.jpg";
import img9 from "../../Assets/chef9.jpg";
import img10 from "../../Assets/chef10.jpg";
import { FaPhone } from "react-icons/fa";
import img11 from "../../Assets/daugher.jpg";
import img12 from "../../Assets/daugher2.jpg";
import img13 from "../../Assets/daught3.jpg";

const Chef = () => {
  return (
    <div className="chef">
      <h3>Here Are Our Chef's Doing What They Do Best</h3>
      <div className="container1">
        <div className="subcon1">
          <img src={img1} alt="" className="image" />
          <h2>Chef Dubrow</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Dubrow <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img2} alt="" className="image" />
          <h2>Chef Martins</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Martins <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img3} alt="" className="image" />
          <h2>Chef Michael</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Michael <FaPhone />
          </button>
        </div>
      </div>{" "}
      <div className="container1">
        <div className="subcon1">
          <img src={img4} alt="" className="image" />
          <h2>Chef Edward</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Edward <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img5} alt="" className="image" />
          <h2>Chef Antonella</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Antonella
            <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img6} alt="" className="image" />
          <h2>Chef Kaitlin</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Kaitlin <FaPhone />
          </button>
        </div>
      </div>
      <div className="container1">
        <div className="subcon1">
          <img src={img7} alt="" className="image" />
          <h2>Chef Nicole</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Nicole <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img10} alt="" className="image" />
          <h2>Chef Nick</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef Nick <FaPhone />
          </button>
        </div>
        <div className="subcon1">
          <img src={img9} alt="" className="image" />
          <h2>Chef James</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            Dolorem, dolor.
          </p>
          <button className="contact">
            Contact Chef James <FaPhone />
          </button>
        </div>
      </div>
      <h4>The Day Before Yesterday Was Bring Your Kids To Work Day</h4>
      <p className="ad">It's Safe To Say The Kids Had Fun</p>
      <div className="container2">
        <div className="subcon2">
          <img src={img11} alt="" className="image" />
          <p>Baby Jane Enjoying Her Cupcake</p>
        </div>
        <div className="subcon2">
          <img src={img12} alt="" className="image" />
          <p>Baby Jane 😁</p>
        </div>
        <div className="subcon2">
          <img src={img13} alt="" className="image" />
          <p>Baby Michelle Enjoying Her Day</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Chef;
