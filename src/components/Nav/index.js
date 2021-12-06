import React from 'react';

const Navigation = () => {
    return(
        <nav>
            <ul className="flex-row">
            <li className="mx-2"><span>About</span></li>
            <li className="mx-2"><span>Portfolio</span></li>
            
            <li className="mx-1"><span>Contact</span></li>
            <li className="mx-1"><span>Resume</span></li>
            </ul>
        </nav>
    );
};

export default Navigation;