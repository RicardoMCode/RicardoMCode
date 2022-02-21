import React from "react";
import myPhoto from "@images/photo.png";
const Photo = () => {
  return (
    <div className="main-photo-content">
      <img className="main-photo" src={myPhoto} alt="fotografia principal" />
    </div>
  );
};

export default Photo;
