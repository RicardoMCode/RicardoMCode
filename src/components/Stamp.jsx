import React from 'react';
import myStamp from '@logos/Sello.png'
const Stamp = () => {
    return (
        <div className='stamp-content'>
        <img className="stamp" src={myStamp}  alt="Sello personal "/>
        </div>
    );
};

export default Stamp;
