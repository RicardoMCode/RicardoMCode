import React from 'react';

const TextSection = (props) => {
    return (
        <div className='text-section-container'>
            {props.content}
        </div>
    );
};

export default TextSection;