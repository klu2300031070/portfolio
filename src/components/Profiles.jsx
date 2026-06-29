import React from 'react';
import './Sections.css';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi';

const codingProfiles = [
    {
        name: "LeetCode",
        username: "kamesh5742",
        link: "https://leetcode.com/u/kamesh5742",
        colorClass: "leetcode",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.824a1.378 1.378 0 0 0 0 1.942l4.51 4.514a1.378 1.378 0 0 0 1.941 0l5.412-5.413a1.378 1.378 0 0 0 0-1.942L14.444.411A1.371 1.371 0 0 0 13.483 0zm5.412 11.233a1.378 1.378 0 0 0-1.941 0l-2.697 2.697a1.378 1.378 0 0 0 0 1.941l2.697 2.697a1.378 1.378 0 0 0 1.941 0l4.514-4.514a1.378 1.378 0 0 0 0-1.941l-4.514-4.514zM22.06 14.5a1.378 1.378 0 0 0-1.941 0H11.119a1.378 1.378 0 0 0 0 2.756h9.001a1.378 1.378 0 0 0 1.941-2.756zM1.941 12.062a1.378 1.378 0 0 0-1.941 1.941l4.514 4.514c.536.536 1.405.536 1.941 0l2.697-2.697a1.378 1.378 0 0 0 0-1.941c-.536-.536-1.405-.536-1.941 0L4.514 16.576l-2.573-2.573a1.366 1.366 0 0 0-.961-.411c-.34 0-.679.136-.961.411z" />
            </svg>
        )
    },
    {
        name: "CodeChef",
        username: "klu_2300031070",
        link: "https://www.codechef.com/users/klu_2300031070",
        colorClass: "codechef",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M21 11.5a1 1 0 0 1-1 1h-2.18c-.41 1.16-1.21 2.14-2.22 2.75l1.55 1.55a1 1 0 1 1-1.41 1.41l-1.55-1.55c-.61 1.01-1.59 1.81-2.75 2.22V21a1 1 0 1 1-2 0v-2.18c-1.16-.41-2.14-1.21-2.75-2.22l-1.55 1.55a1 1 0 1 1-1.41-1.41l1.55-1.55c-1.01-.61-1.81-1.59-2.22-2.75H3a1 1 0 1 1 0-2h2.18c.41-1.16 1.21-2.14 2.22-2.75L5.85 5.85a1 1 0 1 1 1.41-1.41l1.55 1.55c.61-1.01 1.59-1.81 2.75-2.22V3a1 1 0 1 1 2 0v2.18c1.16.41 2.14 1.21 2.75 2.22l1.55-1.55a1 1 0 1 1 1.41 1.41l-1.55 1.55c1.01.61 1.81 1.59 2.22 2.75H20a1 1 0 0 1 1 1v.5zm-9 4.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </svg>
        )
    },
    {
        name: "HackerRank",
        username: "h2300031070",
        link: "https://www.hackerrank.com/profile/h2300031070",
        colorClass: "hackerrank",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.5c0 .28-.22.5-.5.5h-1.6c-.28 0-.5-.22-.5-.5v-3h-1.4v3c0 .28-.22.5-.5.5H9.2c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5h1.6c.28 0 .5.22.5.5v3h1.4v-3c0-.28.22-.5.5-.5h1.6c.28 0 .5.22.5.5v9z" />
            </svg>
        )
    },
    {
        name: "Codeforces",
        username: "2300031070",
        link: "https://codeforces.com/profile/2300031070",
        colorClass: "codeforces",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <rect x="3" y="10" width="4.5" height="11" rx="1" />
                <rect x="9.75" y="4" width="4.5" height="17" rx="1" />
                <rect x="16.5" y="7" width="4.5" height="14" rx="1" />
            </svg>
        )
    }
];

const developerProfiles = [
    {
        name: "GitHub",
        username: "klu2300031070",
        link: "https://github.com/klu2300031070",
        colorClass: "github",
        icon: <FiGithub size={36} />
    },
    {
        name: "LinkedIn",
        username: "kamesh-prasad-sakalabattula",
        link: "https://www.linkedin.com/in/kamesh-prasad-sakalabattula-06316b2b0",
        colorClass: "linkedin",
        icon: <FiLinkedin size={36} />
    }
];

const Profiles = () => {
    return (
        <section className="portfolio-section" id="profiles">
            <motion.h2
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Profiles
            </motion.h2>

            <div className="profiles-section-content">
                {/* Coding Profiles Group */}
                <div className="profiles-group">
                    <h3 className="profiles-group-title">Coding Profiles</h3>
                    <div className="profiles-grid">
                        {codingProfiles.map((profile, index) => (
                            <motion.div
                                className={`profile-card ${profile.colorClass}`}
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="profile-icon">
                                    {profile.icon}
                                </div>
                                <h4 className="profile-name">{profile.name}</h4>
                                <p className="profile-username">{profile.username}</p>
                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="profile-link-btn"
                                >
                                    <FiExternalLink /> View Profile
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social & Dev Profiles Group */}
                <div className="profiles-group">
                    <h3 className="profiles-group-title">Developer & Social Profiles</h3>
                    <div className="profiles-grid">
                        {developerProfiles.map((profile, index) => (
                            <motion.div
                                className={`profile-card ${profile.colorClass}`}
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="profile-icon">
                                    {profile.icon}
                                </div>
                                <h4 className="profile-name">{profile.name}</h4>
                                <p className="profile-username">{profile.username}</p>
                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="profile-link-btn"
                                >
                                    <FiExternalLink /> View Profile
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profiles;
