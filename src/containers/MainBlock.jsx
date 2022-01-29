import React from 'react';
//This is the main container, this allows you to modify the main information of the portfolio
const MainBlock = ({block1, block2}) => {
    return (
        <div>
            {block1}
            {block2}
        </div>
    );
};

export default MainBlock;