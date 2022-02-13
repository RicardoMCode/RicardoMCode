import React, { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import Certificates from "./Certificates";
import Projects from "./Projects";

const CardsSection = () => {
    const {viewSelect} = useContext(PortfolioContext);
    return (
        <div className='cards-section-container'>
            {viewSelect == "aboutMe" ? <Certificates /> : <Projects />}
        </div>
    );
};

export default CardsSection;