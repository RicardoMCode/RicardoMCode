import React from "react";

const Project = ({ image, name, link, description, technologies }) => {
  return (
    <div className="project-item">
      <img className="project-image" src={image}></img>
      <p className="project-name">{name}</p>
      <div className="poroject-information">
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>
      </div>
    </div>
  );
};

export default Project;
