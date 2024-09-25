import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';
import './assets/styles/index.css'


const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <>
        <motion.button
          onClick={toggleTheme}
          className="theme-toggle-button mt-10 "
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </motion.button>
        <Element name="hero">
          <Hero theme={theme} />
        </Element>

        <Element name="about">
          <AboutMe />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="contact">
          <h2>Contact Us</h2>
          {/* <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form> */}
        </Element>
      </>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;