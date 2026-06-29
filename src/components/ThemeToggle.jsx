import React from 'react';
import './ThemeToggle.css';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = ({ theme, switchTheme }) => {
    return (
        <button
            onClick={switchTheme}
            className="theme-toggle"
            aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            type="button"
        >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
    );
};

export default ThemeToggle;
