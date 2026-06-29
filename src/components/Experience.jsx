import React from 'react';
import './Sections.css';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Java Full Stack Developer Intern",
        company: "AICTE EduSkills",
        date: "Apr 2025 – Jun 2025",
        bullets: [
            "Developed scalable full-stack applications using Spring Boot and React with MVC architecture.",
            "Built REST APIs and integrated frontend-backend modules with optimized database workflows."
        ]
    },
    {
        role: "ServiceNow Virtual Intern",
        company: "SmartBridge & AICTE",
        date: "Feb 2026 – Mar 2026",
        bullets: [
            "Designed enterprise workflow automation solutions for incident and service management.",
            "Built and customized forms, applications, and workflow-driven solutions for ITSM use cases."
        ]
    }
];

const Experience = () => {
    return (
        <section className="portfolio-section" id="experience">
            <motion.h2 
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Work Experience
            </motion.h2>

            <div className="timeline">
                {experienceData.map((item, index) => (
                    <motion.div 
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="timeline-dot"></span>
                        <div className="timeline-header">
                            <h3 className="timeline-title">{item.role}</h3>
                            <span className="timeline-date">{item.date}</span>
                        </div>
                        <h4 className="timeline-subtitle">{item.company}</h4>
                        <ul className="timeline-desc">
                            {item.bullets.map((bullet, bIndex) => (
                                <li key={bIndex}>{bullet}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
