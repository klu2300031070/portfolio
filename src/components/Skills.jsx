import React, { useState, useEffect, useRef } from 'react';
import './Sections.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaJava, FaJs, FaPython, FaReact, FaDocker, FaAws,
    FaNodeJs, FaLock, FaLink, FaUserShield, FaBrain, FaRegFileCode
} from 'react-icons/fa';
import {
    SiSpringboot, SiTailwindcss, SiPostgresql, SiMongodb,
    SiMysql, SiKubernetes, SiJenkins, SiEclipseide, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "C", icon: <FaRegFileCode /> }
        ]
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "HTML", icon: <FaRegFileCode /> },
            { name: "CSS", icon: <FaRegFileCode /> }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "REST APIs", icon: <FaLink /> },
            { name: "JWT / OAuth2", icon: <FaLock /> },
            { name: "RBAC Secure", icon: <FaUserShield /> },
            { name: "Spring Secure", icon: <FaUserShield /> }
        ]
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> }
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Jenkins", icon: <SiJenkins /> },
            { name: "Kubernetes", icon: <SiKubernetes /> }
        ]
    },
    {
        category: "Developer Tools",
        skills: [
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Eclipse", icon: <SiEclipseide /> },
            { name: "MySQL Workbench", icon: <SiMysql /> },
            { name: "Postman", icon: <SiPostman /> }
        ]
    },
    {
        category: "Fundamentals",
        skills: [
            { name: "DSA", icon: <FaBrain /> }
        ]
    }
];

// Flatted list of skills to revolve around the 3D Sphere core
const sphereSkills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "REST API", icon: <FaLink /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "DSA", icon: <FaBrain /> },
    { name: "Eclipse", icon: <SiEclipseide /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Tailwind", icon: <SiTailwindcss /> }
];

const Skills = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'sphere'
    const animationFrameIdRef = useRef(null);
    const eventListenersRef = useRef(null);

    // Using Callback Ref to safely run animation once component enters DOM after exit transitions
    const sphereRef = React.useCallback((node) => {
        if (!node) {
            // Clean up when element unmounts
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
            if (eventListenersRef.current) {
                const {
                    wrapper,
                    handleMouseDown,
                    handleMouseMove,
                    handleMouseUp,
                    handleMouseLeave,
                    handleTouchStart,
                    handleTouchMove,
                    handleTouchEnd,
                    handleScroll
                } = eventListenersRef.current;
                
                wrapper.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                wrapper.removeEventListener('mouseleave', handleMouseLeave);

                wrapper.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('touchend', handleTouchEnd);
                window.removeEventListener('scroll', handleScroll);
            }
            return;
        }

        const wrapper = node;
        let items = [];
        let mouseX = 0;
        let mouseY = 0;
        let active = false;

        let lastScrollY = window.scrollY;
        let scrollDelta = 0;
        let vx = 0.002;
        let vy = -0.002;

        let isDragging = false;
        let lastX = 0;
        let lastY = 0;

        const radius = 220;
        const count = sphereSkills.length;

        // Distribute coordinates on a Fibonacci Sphere
        const tagData = sphereSkills.map((_, index) => {
            const phi = Math.acos(-1 + (2 * index) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            return {
                x: radius * Math.sin(phi) * Math.cos(theta),
                y: radius * Math.sin(phi) * Math.sin(theta),
                z: radius * Math.cos(phi)
            };
        });

        const handleStart = (clientX, clientY) => {
            isDragging = true;
            lastX = clientX;
            lastY = clientY;
            wrapper.style.cursor = 'grabbing';
        };

        const handleMove = (clientX, clientY) => {
            if (isDragging) {
                const dx = clientX - lastX;
                const dy = clientY - lastY;
                vy = dx * 0.005;
                vx = -dy * 0.005;
                lastX = clientX;
                lastY = clientY;
            } else {
                const rect = wrapper.getBoundingClientRect();
                mouseX = clientX - rect.left - rect.width / 2;
                mouseY = clientY - rect.top - rect.height / 2;
                active = true;
            }
        };

        const handleEnd = () => {
            isDragging = false;
            active = false;
            wrapper.style.cursor = 'grab';
        };

        const handleMouseDown = (e) => {
            handleStart(e.clientX, e.clientY);
        };

        const handleMouseMove = (e) => {
            handleMove(e.clientX, e.clientY);
        };

        const handleMouseUp = () => {
            handleEnd();
        };

        const handleMouseLeave = () => {
            if (!isDragging) {
                active = false;
            }
        };

        const handleTouchStart = (e) => {
            if (e.touches.length > 0) {
                handleStart(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const handleTouchMove = (e) => {
            if (isDragging && e.touches.length > 0) {
                e.preventDefault();
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const handleTouchEnd = () => {
            handleEnd();
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollDelta += currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;
        };

        wrapper.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        wrapper.addEventListener('mouseleave', handleMouseLeave);

        wrapper.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('scroll', handleScroll, { passive: true });

        eventListenersRef.current = {
            wrapper,
            handleMouseDown,
            handleMouseMove,
            handleMouseUp,
            handleMouseLeave,
            handleTouchStart,
            handleTouchMove,
            handleTouchEnd,
            handleScroll
        };

        const focalLength = 330;

        const animate = () => {
            // Select item children dynamically
            if (items.length === 0) {
                items = wrapper.querySelectorAll('.skills-sphere-item');
            }

            if (items.length > 0) {
                // Cap scrollDelta to avoid excessive spinning speeds
                const maxScrollDelta = 40;
                if (scrollDelta > maxScrollDelta) scrollDelta = maxScrollDelta;
                if (scrollDelta < -maxScrollDelta) scrollDelta = -maxScrollDelta;

                // Add scroll rotation contribution
                const rxScroll = scrollDelta * 0.003;
                // Decay the scroll delta so the spin slows down and stops smoothly
                scrollDelta *= 0.92;

                let rx, ry;

                if (isDragging) {
                    rx = vx + rxScroll;
                    ry = vy;
                } else {
                    // Decay velocity slowly back to default auto-rotation
                    const targetVx = active ? (mouseY * 0.00015) : 0.002;
                    const targetVy = active ? -(mouseX * 0.00015) : -0.002;

                    // Easing back to targets (using a smaller easing factor like 0.025 for longer momentum decay)
                    vx += (targetVx - vx) * 0.025;
                    vy += (targetVy - vy) * 0.025;

                    rx = vx + rxScroll;
                    ry = vy;
                }

                // Rotate coordinates around Y axis
                const cosY = Math.cos(ry);
                const sinY = Math.sin(ry);
                tagData.forEach(tag => {
                    const x1 = tag.x * cosY - tag.z * sinY;
                    const z1 = tag.z * cosY + tag.x * sinY;
                    tag.x = x1;
                    tag.z = z1;
                });

                // Rotate coordinates around X axis
                const cosX = Math.cos(rx);
                const sinX = Math.sin(rx);
                tagData.forEach(tag => {
                    const y1 = tag.y * cosX - tag.z * sinX;
                    const z1 = tag.z * cosX + tag.y * sinX;
                    tag.y = y1;
                    tag.z = z1;
                });

                items.forEach((item, index) => {
                    const tag = tagData[index];
                    if (!tag) return;

                    const scale = focalLength / (focalLength + tag.z);
                    const opacity = (scale - 0.45) * 1.8;
                    
                    // Z index relative to center card (at zIndex 100).
                    // Front hemisphere tag.z < 0 -> zIndex > 100 (renders above center card).
                    // Back hemisphere tag.z > 0 -> zIndex < 100 (renders below/behind center card).
                    const zIndex = Math.round(100 - tag.z);

                    // Use tag.x and tag.y directly, not multiplied by scale.
                    // This keeps items at a uniform distance from the core.
                    item.style.transform = `translate3d(${tag.x}px, ${tag.y}px, ${tag.z}px) scale(${scale})`;
                    item.style.opacity = Math.max(0.15, Math.min(1, opacity));
                    item.style.zIndex = zIndex;
                });
            }

            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <section className="portfolio-section" id="skills">
            <motion.h2
                className="portfolio-section__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Technical Skills
            </motion.h2>

            {/* Toggle Switch */}
            <div className="skills-toggle-container">
                <button
                    className={`skills-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                >
                    Grid View
                </button>
                <button
                    className={`skills-toggle-btn ${viewMode === 'sphere' ? 'active' : ''}`}
                    onClick={() => setViewMode('sphere')}
                >
                    3D Sphere
                </button>
            </div>
            <div style={{ width: '100%', minHeight: '520px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                    {viewMode === 'grid' ? (
                        /* Grid View showing categories */
                        <motion.div
                            key="grid"
                            className="skills-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {skillsData.map((categoryItem, index) => (
                                <motion.div
                                    className="skills-category"
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <h3 className="skills-category__title">{categoryItem.category}</h3>
                                    <div className="skills-list">
                                        {categoryItem.skills.map((skill, sIndex) => (
                                            <span key={sIndex} className="skill-tag">
                                                <span className="skill-icon">{skill.icon}</span>
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        /* 3D Sphere View centered with core card and revolving icons */
                        <motion.div
                            key="sphere"
                            ref={sphereRef}
                            className="skills-sphere-3d-wrapper"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Central Core Card */}
                            <div className="skills-sphere-center-card">
                                <h3>Core Skills</h3>
                            </div>

                            {/* Floating 3D revolving skill items */}
                            {sphereSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skills-sphere-item"
                                    style={{ zIndex: 10 }}
                                >
                                    <span className="skills-sphere-item-icon">{skill.icon}</span>
                                    <span className="skills-sphere-item-name">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
