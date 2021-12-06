import React from 'react';

const Header = () => {
    return(
        <header>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Coder
            </a>
        </header>
    );

};

export default Header;