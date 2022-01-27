import React from "react";
import WelcomeText from "../components/WelcomeText";
import Header from "../containers/Header";
import MyselfInformation from "../containers/MyselfInformation";
import WelcomeSection from "../containers/WelcomeSection";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <WelcomeSection content={<WelcomeText />}></WelcomeSection>
            <MyselfInformation />
        </div>
    );
};

export default Home;