import React from "react";
import ContactInformation from "./ContactInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="foter-text">
        <FontAwesomeIcon icon={faMapPin} size="2x" />
        <h4>Bucaramanga - Colombia</h4>
        {/* Copyright */}
        <p>© 2021 Copyright : NRM</p>        
        <p>Todos los derechos reservados</p>
      </div>
      <ContactInformation />
    </footer>
  );
};

export default Footer;
