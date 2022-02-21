import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
  faGithub,
  faBootstrap,
  faNode,
  faPhp,

} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

const Technologies = () => {
  return (
    <div className="technologies-container">
    <div className="technologies-item html"><FontAwesomeIcon icon={faHtml5} size="6x" /></div>
        <div className="technologies-item css"><FontAwesomeIcon icon={faCss3} size="6x" /></div>
        <div className="technologies-item js"><FontAwesomeIcon icon={faJs} size="6x" /></div>
        <div className="technologies-item react"><FontAwesomeIcon icon={faReact} size="6x" /></div>
        <div className="technologies-item git"><FontAwesomeIcon icon={faGit} size="6x" /></div>
        <div className="technologies-item github"><FontAwesomeIcon icon={faGithub} size="6x" /></div>
        <div className="technologies-item boots"><FontAwesomeIcon icon={faBootstrap} size="6x" /></div>
        <div className="technologies-item db"><FontAwesomeIcon icon={faDatabase} size="6x" /></div>
    </div>
  );
};

export default Technologies;
