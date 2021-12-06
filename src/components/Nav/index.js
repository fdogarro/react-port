import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <ul className="flex-row">
                <Link to="/"> <li className="mx-2">About me</li></Link>
                <Link to="/portfolio"> <li className="mx-2">Portfolio</li></Link>
                <Link to="/contact"> <li className="mx-2">Contact</li></Link>
                <Link to="/resume"> <li className="mx-2">Resume</li></Link>
            </ul>
        </nav>
    );
};

export default Navigation;