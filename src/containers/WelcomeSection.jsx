import React from 'react';
import '../styles/welcomeSection.css';

const WelcomeSection = (props) => {
    return (
        <div className='welcome-section-container'>
            {props.content}
        </div>
    );
};

export default WelcomeSection;