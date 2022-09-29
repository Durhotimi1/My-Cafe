import "./Contact.css";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="social">
      <h2>
        To Know More About My Cafe Or How to Book Reservations, Follow Us On All
        Social Media Platforms
      </h2>
      <div className="options">
        <p>
          <FaFacebookSquare className="ico" />
          My Cafe Foods
        </p>
        <p>
          <FaTwitterSquare className="ico" />
          @MyCafe_Foods
        </p>
        <p>
          <FaInstagramSquare className="ico" />
          @MyCafe_Foods
        </p>
        <p>
          <FaWhatsappSquare className="ico" />
          +234 812303 3678
        </p>
      </div>
      <div className="fot">
        <h3>Your Satisfaction Is Our Top Most Priority!!!</h3>
      </div>
    </div>
  );
};

export default Contact;
