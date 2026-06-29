import React, { useState } from 'react';
import './Sections.css';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const FORMSPREE_URL = "https://formspree.io/f/xpqyodbl"; // Replace with your Formspree Form ID

const directContactData = [
    {
        name: "LinkedIn",
        value: "kamesh-prasad-sakalabattula-06316b2b0",
        link: "https://www.linkedin.com/in/kamesh-prasad-sakalabattula-06316b2b0",
        icon: <FiLinkedin />,
        colorClass: "linkedin"
    },
    {
        name: "GitHub",
        value: "klu2300031070",
        link: "https://github.com/klu2300031070",
        icon: <FiGithub />,
        colorClass: "github"
    },
    {
        name: "LeetCode",
        value: "kamesh5742",
        link: "https://leetcode.com/u/kamesh5742",
        icon: <FiCode />,
        colorClass: "leetcode"
    },
    {
        name: "CodeChef",
        value: "klu_2300031070",
        link: "https://www.codechef.com/users/klu_2300031070",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M21 11.5a1 1 0 0 1-1 1h-2.18c-.41 1.16-1.21 2.14-2.22 2.75l1.55 1.55a1 1 0 1 1-1.41 1.41l-1.55-1.55c-.61 1.01-1.59 1.81-2.75 2.22V21a1 1 0 1 1-2 0v-2.18c-1.16-.41-2.14-1.21-2.75-2.22l-1.55 1.55a1 1 0 1 1-1.41-1.41l1.55-1.55c-1.01-.61-1.81-1.59-2.22-2.75H3a1 1 0 1 1 0-2h2.18c.41-1.16 1.21-2.14 2.22-2.75L5.85 5.85a1 1 0 1 1 1.41-1.41l1.55 1.55c.61-1.01 1.59-1.81 2.75-2.22V3a1 1 0 1 1 2 0v2.18c1.16.41 2.14 1.21 2.75 2.22l1.55-1.55a1 1 0 1 1 1.41 1.41l-1.55 1.55c1.01.61 1.81 1.59 2.22 2.75H20a1 1 0 0 1 1 1v.5zm-9 4.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </svg>
        ),
        colorClass: "codechef"
    },
    {
        name: "Email",
        value: "kameshsakalabattula@outlook.com",
        link: "mailto:kameshsakalabattula@outlook.com",
        icon: <FiMail />,
        colorClass: "email"
    }
];

const Contact = () => {
    const [formStatus, setFormStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("SENDING");
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setFormStatus("SUCCESS");
                setName("");
                setEmail("");
                setMessage("");
                form.reset();
            } else {
                setFormStatus("ERROR");
            }
        } catch (error) {
            setFormStatus("ERROR");
        }
    };

    return (
        <section className="portfolio-section" id="contact">
            <motion.h2 
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Get In Touch
            </motion.h2>

            <div className="contact-dashboard">
                {/* Left Side: Contact Form */}
                <motion.div 
                    className="contact-panel-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3 className="contact-panel-subtitle">Send a Message</h3>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                placeholder="Insert your name"
                                className="form-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                placeholder="Insert your email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                required 
                                placeholder="Write your message"
                                rows="6"
                                className="form-input"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={formStatus === "SENDING"}
                            className="contact-form-btn"
                        >
                            {formStatus === "SENDING" ? (
                                "Sending..."
                            ) : (
                                <>
                                    <FiSend /> Send Message
                                </>
                            )}
                        </button>

                        {formStatus === "SUCCESS" && (
                            <motion.div 
                                className="form-status success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}

                        {formStatus === "ERROR" && (
                            <motion.div 
                                className="form-status error"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <FiAlertCircle /> 
                                <span>
                                    Submission failed. Please configure your Formspree ID, or <a href={`mailto:kameshsakalabattula@outlook.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)} (From: ${email})`} style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 'bold' }}>click here to send via email client</a>.
                                </span>
                            </motion.div>
                        )}
                    </form>
                </motion.div>

                {/* Right Side: Let's Connect & Direct Contact */}
                <motion.div 
                    className="contact-panel-right"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="direct-contact-intro">
                        <h3 className="contact-panel-subtitle">Let's Connect!</h3>
                        <p className="contact-text">
                            I'd love to hear from you! Whether you have a question, an opportunity, or just want to chat, feel free to drop me a message.
                        </p>
                    </div>

                    <div className="direct-contact-section">
                        <h4 className="direct-contact-title">Direct Contact</h4>
                        <div className="direct-contact-grid">
                            {directContactData.map((contact, index) => (
                                <a 
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`direct-contact-card ${contact.colorClass}`}
                                >
                                    <div className="direct-contact-icon-wrapper">
                                        {contact.icon}
                                    </div>
                                    <div className="direct-contact-info">
                                        <span className="direct-contact-name">{contact.name}</span>
                                        <span className="direct-contact-val">{contact.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Custom Footer */}
            <motion.div 
                className="footer-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="footer-line"></div>
                <div className="footer-content">
                    <p className="footer-text">
                        Made with 💖 by Kamesh Prasad @Kaushik
                    </p>
                    <div className="footer-socials">
                        <a 
                            href="https://github.com/klu2300031070" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/kamesh-prasad-sakalabattula-06316b2b0" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
