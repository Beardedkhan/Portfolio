import React from 'react';
import {FaLinkedin, FaGithub, FaInbox} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact">
            <h2>Contact</h2>
            <p>Let's Get Social</p>
            <div className="social-links">
                <div className="widget-box">
                <a href="https://www.linkedin.com/in/abuzar-khan-169ba2184/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" size={32} />
                </a>
                <a href="https://github.com/Beardedkhan?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" size={32} />
                </a>
                <a href="mailto:khan.abuzar.mehmood03@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaInbox className="icon" size={32} />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;