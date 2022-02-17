import React, { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
const MenuHeader = () => {
  const { setViewSelect } = useContext(PortfolioContext);
  return (
    <div className="menu-content">
      <div
        className="menu-item-select"
        onClick={() => {
          setViewSelect("projects");
          document.querySelector(".menu-item-select").className = "menu-item-unselect";
          document.querySelector(".menu-item-unselect").className = "menu-item-select";
        }}
      >
        {/* Projects */}
        Proyectos
      </div>
      <span>|</span>
      <div
      className="menu-item-unselect"
        onClick={() => {
          setViewSelect("aboutMe");
          document.querySelector(".menu-item-unselect").className = "menu-item-select";
          document.querySelector(".menu-item-select").className = "menu-item-unselect";
        }}
      >
        {/* About Me */}
        Sobre Mí
      </div>
    </div>
  );
};

export default MenuHeader;
