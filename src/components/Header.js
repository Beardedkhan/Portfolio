import React from 'react';
import { Link } from 'react-router-dom';
import ResumePDF from '../components/resume.pdf';

const Header = () => {
    const openResume = () => {
        window.open(ResumePDF, '_blank');
    };

    return (
        <header>
            <h1>Abuzar Khan</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <Link to="/PhotoSection">ME</Link> 
                    </li>
                    <li>
                        <button className="header-button" onClick={openResume}>
                            RESUME
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
