import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <p>
        My Cafe was founded by Ajayi Oluwadurotimi and his Lovely wife Ajayi
        Michelle. <br />
        Mr. Durotimi always says he founded My Cafe to satisfy the stomachs of
        hungry people, and so far so good, we have been able to do that. <br />
        We are recongnised all over the world for our tasty dishes. <br />
        We've received awards to show that we're really the best you can find.{" "}
        <br />
      </p>
      <div className="review">
        <h2>Tell Us What You Think Of My Cafe</h2>
        <input type="text" placeholder="Type Your Review..." />
        <button className="sub">Submit</button>
      </div>
    </div>
  );
};

export default About;
