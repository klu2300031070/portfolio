import React, { useState } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import NavSidebar from './components/NavSidebar';
import Shapes from './components/home/Shapes';
import Home from './components/home/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <div className="app" data-theme={theme}>
        <ThemeToggle theme={theme} switchTheme={switchTheme} />
        <NavSidebar />
        <Shapes />
        <main className="main">
          <Home />
          <About />
          <Education />
          <Skills />
          <Profiles />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
