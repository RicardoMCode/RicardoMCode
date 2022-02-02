import React, { useContext } from "react";
import TextSection from "../containers/TextSection";
import WelcomeText from "../components/WelcomeText";
import CardsSection from "../containers/CardsSection";
import MyselfInformation from "../components/MyselfInformation";
import PortfolioContext from "../context/PortfolioContext";
//This is the main container, this allows you to modify the main information of the portfolio
const MainBlock = () => {
  const {viewSelect} = useContext(PortfolioContext);
  const projectSection = () => {
    return <TextSection content={<WelcomeText />}></TextSection>;
  };
  const aboutMeSection = () => {
    return <TextSection content={<MyselfInformation />}></TextSection>;
  };
  return (
    <>
    {/* Sólo hay dos secciones, la principal "project" y "about me", al seleccionar 
    cambia el estado de section, dependiendo del estado muestra la vista deseada */}
      {viewSelect == "aboutMe" ? aboutMeSection() : projectSection()}
      <CardsSection />
    </>
  );
};

export default MainBlock;
