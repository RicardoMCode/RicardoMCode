import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    let whatsappLink = "https://wa.me/573102805043?text=Hola,%20vi%20tu%20portafolio%20web%20y%20estoy%20interesado%20en%20tus%20habilidades"
    let linkedinLink = "https://www.linkedin.com/in/ricardo-maldonado-1204-"
    let githubLink = "https://github.com/RicardoMaldonadoV"
    return (
    <div className="socialmedia-icon-content">
    <a
      className="socialmedia-icon"
      href={whatsappLink}
    >
      <FontAwesomeIcon icon={faWhatsappSquare} size="3x" />
    </a>
      <a
        className="socialmedia-icon"
        href={linkedinLink}
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
      </a>
      <a
        className="socialmedia-icon"
        href={githubLink}
      >
        <FontAwesomeIcon icon={faGithubSquare} size="3x" />
      </a>
    </div>
  );
};

export default SocialMedia;
