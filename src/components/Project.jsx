import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";

const Project = ({ image, name, link, shortDescription, technologies }) => {
  return (
    <div className="project-item">
      <img className="project-image" src={image}></img>
      <div className="project-information">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{shortDescription}</p>
        <div className="project-button-content">
          <button className="project-button format-icon">
            <FontAwesomeIcon icon={faPlus} size="2x" />
            <p>More</p>
          </button>
          <button className="project-button format-icon">
            <FontAwesomeIcon icon={faPlay} size="2x" />
            <p>Demo</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
