import React from 'react';
import { FaDatabase, FaChartLine, FaBrush, FaCogs, FaGithub} from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Master Thesis: Overview Data Analysis of Indian Suicide rates in India over a decade.',
            description: 'Applying Machine learning algorithms after surpassing the dataset through several Data preprocessing techniques, and performing EDA to show off the results and infer from that!',
            githubLink: 'https://github.com/Beardedkhan/Master-Thesis-Overall-analysis',
            icon: <FaChartLine className="project-icon" />,
        },
        {
            title: 'Data Storage Solutions implied on Super Market dataset.',
            description: 'Implementing SSRS and SSIS techniques, chalking out the Schema, ETL and implementing the same techniques to create visualization reports and graph databases with comparative conclusion.',
            githubLink: 'https://github.com/Beardedkhan/Data-Storage-Solutions-implied-on-Super-Market-dataset',
            icon: <FaDatabase className="project-icon" />,
        },
        {
            title: 'Data Visualization Reports in Tableau.',
            description: 'Worked on Beverages and GlassDoor_reviews created worksheets Dashboards and story based on the variable and features that were suitable for insights',
            githubLink: 'https://github.com/Beardedkhan/EDA_Tableau_two_data_sets',
            icon: <FaBrush className="project-icon" />,
        },
        {
            title: 'CRISP DM- Methodology Implied on Disneyland reviews.',
            description: 'Sentimental Analysis based on target variable, text reviews based on the label ratings, discretization of target variable based on numerical Values, Scoring off with SVM and comparing various models using auto model and manual.',
            githubLink: 'https://github.com/Beardedkhan/Sentiment-Analysis',
            icon: <FaCogs className="project-icon" />,
        },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>There are some projects I've been able to work on these years</p>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <FaCogs className="project-icon" />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <a className="github-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="github-icon" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
