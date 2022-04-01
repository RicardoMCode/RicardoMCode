import React from "react";
import MainBlock from "../containers/MainBlock";
import Footer from "../containers//Footer";
import Header from "../containers/Header";
import Technologies from "../components/Technologies";
//Contexto del home - para cambiar la vista
import PortfolioContext from "../context/PortfolioContext";
import portfolioState from "../hooks/portfolioState";
import '../styles/global.css';

const Home = () => {
  const selectView = portfolioState();
  return (
    <PortfolioContext.Provider value={selectView}>
      <Header></Header>
      {/* Este tramo se muestra segun el criterio al seleccionar entre las dos opciones del menú*/}
      <MainBlock />
      {/* Aquí va el contenedor con las técnologías que manejo */}
      <Technologies />
      <Footer />
    </PortfolioContext.Provider>
  );
};

export default Home;
