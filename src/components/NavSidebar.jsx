import React from 'react';
import './NavSidebar.css';
import {
    FiHome,
    FiUser,
    FiBookOpen,
    FiCpu,
    FiBriefcase,
    FiLayers,
    FiShield,
    FiAward,
    FiMessageSquare,
    FiTerminal
} from 'react-icons/fi';

const navItems = [
    { href: "#home", icon: FiHome, tooltip: "Home" },
    { href: "#about", icon: FiUser, tooltip: "About" },
    { href: "#education", icon: FiBookOpen, tooltip: "Education" },
    { href: "#skills", icon: FiCpu, tooltip: "Skills" },
    { href: "#profiles", icon: FiTerminal, tooltip: "Profiles" },
    { href: "#projects", icon: FiLayers, tooltip: "Projects" },
    { href: "#certifications", icon: FiShield, tooltip: "Certifications" },
    { href: "#achievements", icon: FiAward, tooltip: "Achievements" },
    { href: "#contact", icon: FiMessageSquare, tooltip: "Contact" }
];

const NavSidebar = () => {
    const handleLinkClick = (e) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <aside className="nav-sidebar">
            <nav className="nav">
                <div className="nav-sidebar__menu">
                    <ul className="nav-sidebar__list">
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={index} className="nav-sidebar__item">
                                    <a
                                        href={item.href}
                                        className="nav-sidebar__link"
                                        onClick={handleLinkClick}
                                        aria-label={item.tooltip}
                                    >
                                        <IconComponent />
                                        <span className="nav-sidebar__tooltip">
                                            {item.tooltip}
                                            <span className="nav-sidebar__tooltip-arrow"></span>
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default NavSidebar;
