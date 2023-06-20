import React from 'react';
import {
    FaComment,
    FaChartLine,
    FaCode,
    FaLeaf,
    FaBook,
    FaPen,
    FaChartBar,
    FaDatabase,
    FaPaintBrush,
    FaCogs,
} from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <h3>Hello there!!</h3>
            <p>
                Welcome to my portfolio! I'm a passionate data analyst with a strong background in extracting insights from
                complex datasets. With a keen eye for detail and a love for problem-solving, I strive to uncover meaningful
                patterns and trends to drive data-driven decision-making.
            </p>
            <p>
                Throughout my journey as a data analyst, I have honed my skills in data wrangling, exploratory data analysis,
                and predictive modeling. I am adept at utilizing various tools and technologies such as Python, SQL, and data
                visualization libraries to transform data into actionable insights.
            </p>
            <p>
                Driven by my curiosity and a constant desire to learn, I always seek to expand my knowledge and stay updated with
                the latest advancements in the field of data analytics. I aim at collaborating with diverse teams and leveraging
                my analytical skills to contribute to impactful projects.
            </p>
            <p>
                Outside of the data realm, you can often find me exploring the outdoors, indulging in a good book, or pursuing
                creative hobbies. I believe in the power of continuous growth, both professionally and personally, and I'm
                excited to embark on new opportunities that challenge and inspire me.
            </p>
            <section id="interests">
                <h2>My Interests</h2>
                <div className="widget">
                    <div className="widget-header">
                        <h3>My Interests & Skills</h3>
                    </div>
                    <div className="widget-content">
                        <ul>
                            <li>
                                <FaChartLine className="interest-icon" />
                                <h4>Data Analysis</h4>
                                <p>Uncovering insights and patterns from data to drive informed decision-making.</p>
                            </li>
                            <li>
                                <FaCode className="interest-icon" />
                                <h4>Data Visualization</h4>
                                <p>Transforming complex data into visual representations that are easy to understand and interpret.</p>
                            </li>
                            <li>
                                <FaLeaf className="interest-icon" />
                                <h4>Machine Learning</h4>
                                <p>Exploring algorithms and models to enable computers to learn and make predictions from data.</p>
                            </li>
                            <li>
                                <FaBook className="interest-icon" />
                                <h4>Outdoor Adventures</h4>
                                <p>Exploring the beauty of nature and challenging myself with thrilling outdoor activities.</p>
                            </li>
                            <li>
                                <FaPen className="interest-icon" />
                                <h4>Reading &amp; Writing</h4>
                                <p>Indulging in books and expressing creativity through writing.</p>
                            </li>
                            <li>
                                <FaComment className="interest-icon" />
                                <h4>Natural Language Processing</h4>
                                <p>Worked on techniques that make sense to human interactive motivations.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <div className="widget">
                    <div className="widget-header">
                        <h3>Skills</h3>
                    </div>
                    <div className="widget-content">
                        <div className="skill-category">
                            <div className="category-header">
                                <FaCogs className="category-icon" />
                                <h3 className="category-title">Machine Learning</h3>
                            </div>
                            <div className="subskills">
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaCode className="subskill-icon" />
                                        Python
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaBook className="subskill-icon" />
                                        NLP (Natural Language Processing)
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaCode className="subskill-icon" />
                                        R
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-category">
                            <div className="category-header">
                                <FaChartBar className="category-icon" />
                                <h3 className="category-title">Data Analytics</h3>
                            </div>
                            <div className="subskills">
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaPen className="subskill-icon" />
                                        Teaching/Presenting
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaDatabase className="subskill-icon" />
                                        Statistical Methods
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="subskill">
                                    <span className="subskill-name">
                                        <FaPaintBrush className="subskill-icon" />
                                        Data Visualization
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
