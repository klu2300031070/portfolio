import React from 'react';
import './Home.css';
import Me from '../../assets/myanimated.png';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import { FiTerminal, FiCloud } from 'react-icons/fi';

const Home = () => {
    const highlights = [
        {
            icon: <FiTerminal />,
            title: "Java Full Stack",
            description: "Building robust enterprise web apps"
        },
        {
            icon: <FiCloud />,
            title: "DevOps & Cloud",
            description: "Implementing CI/CD and cloud solutions"
        }
    ];

    return (
        <section className="home container" id='home'>
            <div className="home__content">
                <motion.div
                    className="home__data"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="home__name">
                        Hi, I'm <span className="home__name-highlight">Kamesh Prasad</span>
                    </h1>

                    <p className="home__description">
                        Java Full Stack Developer & DevOps Engineer <br />
                        Passionate about <span className="highlight-text">CI/CD, Cloud</span> and exploring new technologies
                    </p>

                    <div className="home__highlights">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="home__highlight-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="home__highlight-icon">{item.icon}</div>
                                <div className="home__highlight-info">
                                    <h2 className="home__highlight-title">{item.title}</h2>
                                    <p className="home__highlight-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="home__buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn btn-secondary">View Projects</a>
                    </motion.div>
                </motion.div>

                <div className="home__img-wrapper">
                    <div className="home__img-border">
                        <img
                            src={Me}
                            alt="Kamesh Prasad"
                            className='home__img'
                        />
                    </div>
                </div>
            </div>

            <ScrollDown />
        </section>
    )
}

export default Home;
