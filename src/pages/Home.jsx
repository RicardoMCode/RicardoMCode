import React from "react";
import WelcomeText from "../components/WelcomeText";
import Header from "../containers/Header";
import MyselfInformation from "../components/MyselfInformation";
import TextSection from "../containers/TextSection";
import CardsSection from "../containers/CardsSection";
import MainBlock from "../containers/MainBlock";
import Footer from "../containers/footer";
//El CSS se organiza por separado sólo en desarrollo - para producción se debe minificar
import "../styles/global/textSection.css";
import "../styles/global/cardsSection.css";
import "../styles/global/header.css";
import "../styles/global/resources.css";
import "../styles/global/contactInformation.css";
import "../styles/global/footer.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* Este tramo se muestra segun el criterio al seleccionar entre las dos opciones */}
      <MainBlock 
      block1={<TextSection content={<WelcomeText />}></TextSection>} 
      block2={<CardsSection />}> 
      </MainBlock>

      <MainBlock 
      block1={<TextSection content={<MyselfInformation />}></TextSection>} 
      block2={<CardsSection />}> 
      </MainBlock>
      {/* Aquí va el contenedor con las técnologías que manejo */}
      <Footer />
    </div>
  );
};

export default Home;
