import React from "react";
import Chef from "../../Components/Chef/Chef";
import Topbar from "../../Components/Topbar/Topbar";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <Topbar />
      <Chef />
    </div>
  );
};

export default Gallery;
