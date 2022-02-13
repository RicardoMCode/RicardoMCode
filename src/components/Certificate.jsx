import React from 'react';

const Certificate = ({image}) => {
    return (
        <div className='certificate-item'>
            <img className='certificate-image' src={image}></img>
        </div>
    );
};

export default Certificate;