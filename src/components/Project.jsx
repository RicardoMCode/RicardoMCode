import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoReelProject from "./VideoReelProject";
import Modal from "../containers/Modal";

const Project = ({ image, name, link, shortDescription, technologies, demo }) => {
//Modal
const showmodal = () => { 
  document.getElementById("demoreel-modal").style.display = "block"; };
  window.onclick = function(event) {
    if (event.target == document.getElementById("demoreel-modal")) {
      document.getElementById("demoreel-modal").style.display = "none";
    }
  }
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
          <button className="project-button format-icon" onClick={showmodal}>
            <FontAwesomeIcon icon={faPlay} size="2x" />
            <p>Demo</p>
          </button>
        </div>
      </div>
      <Modal id="demoreel-modal" contents={<VideoReelProject videolink={link}/>}/>
    </div>
  );
};

export default Project;
