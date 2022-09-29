import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

const Topbar = () => {
  return (
    <header>
      <h3>
        <FaCoffee className="icon" /> My Cafe
      </h3>
      <ul>
        <Link className="link" to="/">
          Homepage
        </Link>
        <Link className="link" to="/Pricings">
          Pricings
        </Link>
        <Link className="link" to="/Gallery">
          Gallery
        </Link>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/Contact">
          Contact
        </Link>
      </ul>
      <p>+234 812303 3678</p>
    </header>
  );
};

export default Topbar;
