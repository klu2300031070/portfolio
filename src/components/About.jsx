import React from 'react';
import './About.css';
import Image from '../assets/my.jpg';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiTerminal, FiCloud } from 'react-icons/fi';

const About = () => {
    const downloadResume = () => {
        // Placeholder link or mailto trigger for resume requests
        window.open('mailto:2300031070cseh2@gmail.com?subject=Resume Request', '_self');
    };

    const traits = [
        {
            icon: <FiUser />,
            title: "Who I Am",
            text: "CSE Student @ KLU"
        },
        {
            icon: <FiMapPin />,
            title: "Where I'm From",
            text: "Andhra Pradesh, India"
        },
        {
            icon: <FiTerminal />,
            title: "What I Do",
            text: "Full Stack & DevOps"
        },
        {
            icon: <FiCloud />,
            title: "Passions",
            text: "Cloud Native Computing"
        }
    ];

    return (
        <section className="portfolio-section" id="about">
            <motion.h2 
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <div className="about__container">
                <motion.div
                    className="about__image-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="about__img-wrapper">
                        <img
                            src={Image}
                            alt="Kamesh Prasad"
                            className='about__img'
                        />
                        <div className="about__img-accents">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about__content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="about__text-content">
                        <h3 className="about__subtitle">
                            Bridging Development and Operations with <span className="text-gradient">Cloud Native Computing</span>
                        </h3>
                        <p className="about__description">
                            Hi, I'm <strong>Kamesh</strong>, a Computer Science and Engineering student at K L University.
                            My academic and engineering journey is driven by <strong>Honors through Experiential Learning</strong>,
                            specializing in the field of <strong>Cloud Native Computing</strong>.
                        </p>
                        <p className="about__description">
                            With a strong interest in <strong>Java Full Stack development</strong> and <strong>DevOps</strong>, I specialize in building end-to-end applications, configuring continuous delivery pipelines, and deploying containerized services. I am passionate about utilizing cloud infrastructure to solve real-world problems.
                        </p>
                    </div>

                    <div className="about__traits">
                        {traits.map((trait, index) => (
                            <motion.div
                                className="about__trait-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="about__trait-icon">{trait.icon}</span>
                                <div className="about__trait-info">
                                    <h4 className="about__trait-title">{trait.title}</h4>
                                    <p className="about__trait-text">{trait.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="about__cta">
                        <button className="btn-about" onClick={downloadResume}>
                            Resume
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
