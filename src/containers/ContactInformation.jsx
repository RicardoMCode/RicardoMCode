import React from "react";
import "../styles/contactInformation.css";
import SocialMedia from "../components/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactInformation = () => {
  return (
    <div className="information-content">
      <div className="information-item">
        <h4>Ing. Nelson Ricardo Maldonado</h4>
      </div>
      <div className="information-item">
        <p>
      <FontAwesomeIcon icon={faPhoneAlt}/> +57 310 280 5043</p>
      </div>
      <div className="information-item">
        <p>
      <FontAwesomeIcon icon={faEnvelope}/> ricardomaldonado1204@gmail.com</p>
      </div>
      <div className="information-item">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactInformation;
