import React from 'react';

const Certificate = ({name, link}) => {
    return (
        <div className='certificate-item'>
            <img className='certificate-image' src={link}></img>
        </div>
        
    );
};

export default Certificate;