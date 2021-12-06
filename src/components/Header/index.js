import React from 'react';
import Nav from '../Nav'

const Header = () => {
    return(
        <header>
            <a data-testid="link" href="/">
                <h2 className="mx-2 font-cursive">Felicia O'Garro</h2>
            </a>
            <Nav />
        </header>
    );

};

export default Header;