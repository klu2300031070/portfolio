import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Ultra-responsive, lag-free spring settings (low mass, high stiffness/damping)
    const x = useSpring(mouseX, { damping: 50, stiffness: 1200, mass: 0.1, restDelta: 0.001 });
    const y = useSpring(mouseY, { damping: 50, stiffness: 1200, mass: 0.1, restDelta: 0.001 });

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target && target.closest('a, button, .interactive, .skills__pill, [role="button"], .floating-skill-item, .home__highlight-card')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="custom-cursor-container">
            <motion.div
                className="custom-cursor"
                style={{
                    x,
                    y,
                    marginLeft: -2,
                    marginTop: -2,
                }}
                animate={{
                    scale: isHovered ? 1.25 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 25
                }}
            >
                <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Metallic gradients for 3D bezel look */}
                        <linearGradient id="metal-b-1" x1="2" y1="2" x2="14" y2="18" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#5a6378" />
                            <stop offset="100%" stopColor="#222730" />
                        </linearGradient>
                        <linearGradient id="metal-b-2" x1="2" y1="2" x2="26" y2="10" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#3a404f" />
                            <stop offset="100%" stopColor="#14171d" />
                        </linearGradient>
                        
                        {/* Dynamic gem gradient adapting to website's theme primary color */}
                        <linearGradient id="gem-b" x1="10" y1="25" x2="25" y2="10" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                            <stop offset="40%" stopColor="var(--first-color)" />
                            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
                        </linearGradient>
                        
                        {/* Dynamic glow using theme primary color */}
                        <filter id="glow-b" x="-30%" y="-30%" width="160%" height="160%">
                            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="var(--first-color)" floodOpacity="0.8" />
                        </filter>
                    </defs>
                    
                    {/* Outer Bezel (Dark Metallic Rim) */}
                    <path d="M 2 2 L 10 26 L 14 18 L 26 10 Z" fill="#0d0f13" stroke="#1b1f27" strokeWidth="1.8" strokeLinejoin="round" />
                    
                    {/* Left Wing Metal Facet */}
                    <path d="M 3.5 3.5 L 9.5 24.5 L 13.5 17.5 Z" fill="url(#metal-b-1)" />
                    
                    {/* Right Wing Metal Facet (Top portion) */}
                    <path d="M 3.5 3.5 L 13.5 17.5 L 24.5 9.5 Z" fill="url(#metal-b-2)" />
                    
                    {/* Triangular Gem Embedded in the Tail Indent */}
                    <path d="M 9.5 24.5 L 13.5 17.5 L 24.5 9.5 Z" fill="url(#gem-b)" filter="url(#glow-b)" />
                    
                    {/* Inner Bezel/Details */}
                    <path d="M 3.5 3.5 L 13.5 17.5" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                    
                    {/* Highlight line on the left outer edge */}
                    <path d="M 3.5 3.5 L 9.5 24.5" stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" opacity="0.25" />
                </svg>
            </motion.div>
        </div>
    );
};

export default CustomCursor;
