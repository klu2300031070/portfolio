import React, { useState } from 'react';
import './Sections.css';
import { motion } from 'framer-motion';
import { FiInfo, FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

// Import project images
import sqlProj from '../assets/sql-proj.png';
import bloodProj from '../assets/blood-proj.png';
import votingProj from '../assets/voting-system-proj.png';
import codeAnaticProj from '../assets/code-anatic-proj.png';

const projects = [
    {
        id: -1,
        title: "CodeAnatic",
        desc: "A web application that provides platform analysis of there submitted problems based it gives scores to users and also give set of problems to them based on there skill and programming languages to achive better perfomance in DSA.",
        tags: ["React", "REST API", "RBAC", "Spring Boot", "Spring Security", "JWT", "Redis", "MYSQL"],
        image: codeAnaticProj,
        github: {
            frontend: "",
            backend: "https://github.com/klu2300031070/Codingprofilesbackend.git"
        },
        demo: ""
    },
    {
        id: 0,
        title: "AI-Based SQL Query Optimizer",
        desc: "Engineered an AI-powered SQL optimization system leveraging LLMs (AWS Bedrock) to analyze and optimize complex queries. Implemented secure Google OAuth2 authentication and built optimized backend processing pipelines.",
        tags: ["AWS Bedrock", "LLMs", "Google OAuth2", "React", "Node.js"],
        image: sqlProj,
        github: {
            frontend: "https://github.com/klu2300031070/sqloptmizerfrontend.git",
            backend: "https://github.com/klu2300031070/sqloptimizerbackendRepo.git"
        },
        demo: ""
    },
    {
        id: 1,
        title: "Life4Change — Blood Bank Management",
        desc: "Built a full-stack system supporting Admin, Hospital, and Blood Bank roles with secure RBAC. Engineered REST APIs for donor records, blood inventory, and broadcasting requests, deployed on Render.",
        tags: ["React", "Node.js", "REST API", "RBAC",],
        image: bloodProj,
        github: "https://github.com/MVamsiKrishnaReddy/CI-CD_GIT-ACTIONS",
        demo: "https://life4change.onrender.com/"
    }, {
        id: 2,
        title: "Online Voting System",
        desc: "FullStack-Voter is a modern, end-to-end web application designed to facilitate an electronic or online voting system. The goal of such a project is to provide a secure, user-friendly, and digital alternative to traditional paper-based or physical voting mechanisms.",
        tags: ["React", "Spring Boot", "Rest API", "MySql"],
        image: votingProj,
        github: "https://github.com/klu2300031070/FullStack-Voter.git",
        demo: ""
    }
];

const Projects = () => {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <section className="portfolio-section" id="projects">
            <motion.h2
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project) => {
                    const isFlipped = flippedId === project.id;
                    return (
                        <div key={project.id} className="project-card-container">
                            <div className={`project-card-inner ${isFlipped ? 'flipped' : ''}`}>

                                {/* Front Face */}
                                <div className="project-card-front">
                                    <div className="project-card-img-wrapper">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="project-card-img"
                                            />
                                        ) : (
                                            <div className="project-card-img-placeholder">
                                                <span>{project.title.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="project-card-bottom">
                                        <h3 className="project-card-title">{project.title}</h3>
                                        <button
                                            className="project-card-info-btn"
                                            onClick={() => handleFlip(project.id)}
                                            aria-label="View Details"
                                        >
                                            <FiInfo />
                                        </button>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="project-card-back">
                                    <div>
                                        <div className="project-card-back-header">
                                            <h3 className="project-card-title">{project.title}</h3>
                                            <button
                                                className="project-card-back-close-btn"
                                                onClick={() => handleFlip(project.id)}
                                                aria-label="Close Details"
                                            >
                                                <FiX />
                                            </button>
                                        </div>
                                        <p className="project-card-desc">{project.desc}</p>
                                        <div className="project-card-tags">
                                            {project.tags.map((tag, tIndex) => (
                                                <span key={tIndex} className="project-card-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-card-links">
                                        {typeof project.github === 'object' ? (
                                            <>
                                                {project.github.frontend && (
                                                    <a
                                                        href={project.github.frontend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-card-link-btn secondary"
                                                    >
                                                        <FiGithub /> Frontend
                                                    </a>
                                                )}
                                                {project.github.backend && (
                                                    <a
                                                        href={project.github.backend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-card-link-btn secondary"
                                                    >
                                                        <FiGithub /> Backend
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-card-link-btn secondary"
                                                >
                                                    <FiGithub /> GitHub
                                                </a>
                                            )
                                        )}
                                        <a
                                            href={project.demo || "under-process.html"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card-link-btn primary"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
