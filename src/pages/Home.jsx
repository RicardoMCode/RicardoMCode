import React from "react";
import MainBlock from "../containers/MainBlock";
import Footer from "../containers/footer";
import Header from "../containers/Header";
//Contexto del home - para cambiar la vista
import PortfolioContext from "../context/PortfolioContext";
import portfolioState from "../hooks/portfolioState";
//El CSS se organiza por separado sólo en desarrollo - para producción se debe minificar
import "../styles/global/textSection.css";
import "../styles/global/cardsSection.css";
import "../styles/global/header.css";
import "../styles/global/resources.css";
import "../styles/global/contactInformation.css";
import "../styles/global/footer.css";
import "../styles/global/certificates.css";
import "../styles/global/projects.css";

const Home = () => {
  const selectView = portfolioState();
  return (
    <PortfolioContext.Provider value={selectView}>
      <Header></Header>
      {/* Este tramo se muestra segun el criterio al seleccionar entre las dos opciones del menú*/}
      <MainBlock />
      {/* Aquí va el contenedor con las técnologías que manejo */}
      <Footer />
    </PortfolioContext.Provider>
  );
};

export default Home;
