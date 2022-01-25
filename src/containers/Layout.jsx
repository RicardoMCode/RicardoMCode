import React from 'react';
//this is the main container that renders everything received
const Layout = ({ children }) => {
    return (
        <div className = "Layout">
            {children}
        </div>
    );
};

export default Layout;