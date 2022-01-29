import React from "react";
import Stamp from "../components/Stamp";
import Photo from "../components/photo";
import ContactInformation from "./ContactInformation";

const Header = () => {
  return (
    <>
      <div className="header-content">
        <Photo></Photo>
        <div className="hidden-information-container">
          <ContactInformation></ContactInformation>
        </div>
        <Stamp></Stamp>
      </div>
    </>
  );
};

export default Header;
