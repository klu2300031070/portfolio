import React from 'react';
import './Sections.css';
import { motion } from 'framer-motion';

const educationData = [
    {
        school: "Koneru Lakshmaiah University",
        degree: "B.Tech in Computer Science and Engineering",
        date: "2023 – 2027",
        details: "CGPA: 9.37 / 10.0 | Specialization in Cloud Native Computing | Honors through Experiential Learning"
    },
    {
        school: "Narayana Junior College",
        degree: "Intermediate (MPC)",
        date: "2021 – 2023",
        details: "Score: 888 / 1000 | Andhra Pradesh Board of Intermediate Education"
    }
];

const Education = () => {
    return (
        <section className="portfolio-section" id="education">
            <motion.h2 
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Education
            </motion.h2>

            <div className="timeline">
                {educationData.map((item, index) => (
                    <motion.div 
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="timeline-dot"></span>
                        <div className="timeline-header">
                            <h3 className="timeline-title">{item.school}</h3>
                            <span className="timeline-date">{item.date}</span>
                        </div>
                        <h4 className="timeline-subtitle">{item.degree}</h4>
                        <p className="timeline-desc" style={{ paddingLeft: '1.25rem', color: 'var(--text-color)', fontSize: 'var(--small-font-size)' }}>
                            {item.details}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
