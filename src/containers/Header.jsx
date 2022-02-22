import React from "react";
import Stamp from "../components/Stamp";
import Photo from "../components/Photo";
import ContactInformation from "./ContactInformation";
import MenuHeader from "../components/MenuHeader";

const Header = () => {
  return (
    <>
      <div className="header-content">
        <Photo></Photo>
        <div className="hidden-information-container">
          <ContactInformation></ContactInformation>
        </div>
        <MenuHeader />
        <Stamp />
      </div>
    </>
  );
};

export default Header;
