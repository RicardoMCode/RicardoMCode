import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoReelProject from "./VideoReelProject";
import Modal from "../containers/Modal";
import { useContext } from "react";
import projectContext from "../context/ProjectContext";

const Project = ({key, image, name, shortDesc, link, longDesc, technologies, demo}) => {
  //Contexto projectos, para cambiar dinamicamente la información del item seleccionado
  const {nameProject, setNameProject, idProject, setidProject, imgLinkProject, setImgLinkProject, technoProject, 
    setTechnoProject, shortDescProject, setShortDescProject, longDescProject, setLongDescProject, linkProject, setLinkProject, demoProject, setDemoProject} = useContext(projectContext);
  //Modals
  const showmodalMore = () => { 
    //Actualizo los datos dinamicamente para el modal More
    setNameProject(name);
    setidProject(key);
    setImgLinkProject(image);
    setTechnoProject(technologies);
    setShortDescProject(shortDesc);
    setLongDescProject(longDesc);
    setDemoProject(demo);
    document.getElementById("more-modal").style.display = "block"; };
  const showmodalDemo = () => { 
    //Actualizo los datos dinamicamente para el modal Demo
    setLinkProject(link);
    document.getElementById("demoreel-modal").style.display = "block"; };
  //Modals Close
  window.onclick = function(event) {
    if (event.target == document.getElementById("demoreel-modal")) {
      document.getElementById("demoreel-modal").style.display = "none";
      //Limpio los datos dinamicos
      setLinkProject(null);
    }
    if (event.target == document.getElementById("more-modal")) {
      document.getElementById("more-modal").style.display = "none";
    }
  }

  return (
    <div className="project-item">
      <img className="project-image" src={image}></img>
      <div className="project-information">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{shortDesc}</p>
        <div className="project-button-content">
          <button className="project-button format-icon" onClick={showmodalMore}>
            <FontAwesomeIcon icon={faPlus} size="2x" />
            <p>More</p>
          </button>
          <button className="project-button format-icon" onClick={showmodalDemo}>
            <FontAwesomeIcon icon={faPlay} size="2x" />
            <p>Demo</p>
          </button>
        </div>
      </div>
      <Modal id="demoreel-modal" contents={<VideoReelProject/>}/>
      <Modal id="more-modal" contents={<h1>{nameProject}</h1>}/>
    </div>
  );
};

export default Project;
