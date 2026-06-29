import React from 'react';
import './Sections.css';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiFileText, FiExternalLink } from 'react-icons/fi';

const achievementsData = [
    {
        icon: <FiCode />,
        value: "50 Days Badge 2026",
        text: "Awarded the LeetCode 50 Days Badge in 2026 for consistent problem-solving and algorithmic practice."
    },
    {
        icon: <FiUsers />,
        value: "DEVTrails 2026",
        text: "Participated in the Guidewire DEVTrails University Hackathon 2026, building insurance tech prototypes in partnership with EY."
    },
    {
        icon: <FiUsers />,
        value: "Code4Change 2025",
        text: "Participated in the national-level Code4Change 2025 Hackathon at KL University, developing a containerized healthcare service solution."
    },
    {
        icon: <FiFileText />,
        value: "HTML Prototype",
        text: "Published a prototype showcase built at KL University on LinkedIn, detailing frontend architecture and implementation.",
        link: "https://www.linkedin.com/posts/kamesh-prasad-sakalabattula-06316b2b0_kluniversity-prototype-html-activity-7295653727015714817-JZ0E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErGPIsB0Ri2-q2TfiYTgXHYPG-PHaW5D0w"
    },
    {
        icon: <FiFileText />,
        value: "Technical Writer",
        text: "Published a comprehensive system design article on building a secure online voting system architecture."
    }
];

const Achievements = () => {
    return (
        <section className="portfolio-section" id="achievements">
            <motion.h2 
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Achievements
            </motion.h2>

            <div className="achievements-grid">
                {achievementsData.map((ach, index) => (
                    <motion.div 
                        className="achievement-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="ach-icon">{ach.icon}</div>
                        <div className="ach-value">{ach.value}</div>
                        <p className="ach-text">{ach.text}</p>
                        {ach.link && (
                            <a 
                                href={ach.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="ach-link-btn"
                            >
                                <FiExternalLink /> Read Article
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
