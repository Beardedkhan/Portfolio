import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <section className="landing-page" onClick={handleClick}>
            <div className="curtain">
                <h1 className="name">ABUZAR KHAN</h1>
                <p className="description">Data Analyst</p>
                <div className="quote">
                    <p className="quote-text">"Intelligence is the ability to adapt to change."</p>
                    <p className="quote-author">- Stephen Hawking</p>
                </div>
            </div>
        </section>
    );
};
export default LandingPage;