import React, { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
const MenuHeader = () => {
  const { setViewSelect } = useContext(PortfolioContext);
  return (
    <div className="menu-content">
      <label
        className="menu-item-select"
        onClick={() => {
          setViewSelect("projects");
          document.querySelector(".menu-item-select").className = "menu-item-unselect";
          document.querySelector(".menu-item-unselect").className = "menu-item-select";
        }}
      >
        Projects
      </label>
      <span>|</span>
      <label
      className="menu-item-unselect"
        onClick={() => {
          setViewSelect("aboutMe");
          document.querySelector(".menu-item-unselect").className = "menu-item-select";
          document.querySelector(".menu-item-select").className = "menu-item-unselect";
        }}
      >
        About Me
      </label>
    </div>
  );
};

export default MenuHeader;
