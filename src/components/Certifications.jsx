import React from 'react';
import './Sections.css';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

// Import certification images
import awsPracCert from '../assets/aws-prac-cert.png';
import dockerFoundCert from '../assets/docker-found-cert.png';
import codechefJsCert from '../assets/codechef-js-cert.png';
import smartInterviewsCert from '../assets/smart-interviews-cert.png';

const certificationsData = [
    {
        title: "Amazon Web Services Cloud Practitioner",
        provider: "Amazon Web Services (AWS)",
        date: "May 2026",
        expiry: "May 2029",
        credentialId: "77331bd777134b689fa7a5034c3ba79b",
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/77331bd777134b689fa7a5034c3ba79b",
        image: awsPracCert
    },
    {
        title: "Docker Foundations Professional Certificate",
        provider: "Docker",
        date: "April 2026",
        expiry: "",
        credentialId: "70c4388daf10139c465117b7626e3eaa99aa44960ff4142f82556b8981d6e751",
        link: "https://www.linkedin.com/learning/certificates/70c4388daf10139c465117b7626e3eaa99aa44960ff4142f82556b8981d6e751",
        image: dockerFoundCert
    },
    {
        title: "Certificate for completing Learn JavaScript",
        provider: "CodeChef",
        date: "April 2026",
        expiry: "",
        credentialId: "6c50e29",
        link: "https://www.codechef.com/certificates/public/6c50e29",
        image: codechefJsCert
    },
    {
        title: "Smart Interviews(hive)",
        provider: "Smart Interviews",
        date: "January 2026",
        expiry: "",
        credentialId: "bc1a4b1f",
        link: "https://smartinterviews.in/certificate/bc1a4b1f",
        image: smartInterviewsCert
    }
];

const Certifications = () => {
    return (
        <section className="portfolio-section" id="certifications">
            <motion.h2
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Certifications
            </motion.h2>

            <div className="certs-grid">
                {certificationsData.map((cert, index) => (
                    <motion.div
                        className="cert-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="cert-card-img-wrapper">
                            <img src={cert.image} alt={cert.title} className="cert-card-img" />
                        </div>
                        <div className="cert-card-content">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-provider">{cert.provider}</p>
                            <p className="cert-date">Issued {cert.date}{cert.expiry && ` · Expires ${cert.expiry}`}</p>
                            {cert.credentialId && (
                                <p className="cert-id">Credential ID: <code>{cert.credentialId}</code></p>
                            )}
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card-link-btn"
                                >
                                    <FiExternalLink /> Verify Credential
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
