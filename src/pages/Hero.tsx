import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const bg = theme === 'light' ? 'https://images.unsplash.com/photo-1629904888099-00285934292b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const subTextColor = theme === 'light' ? 'text-gray-700' : 'text-gray-200';
  const ctaBgColor = theme === 'light' ? 'bg-blue-600' : 'bg-blue-400';
  const ctaHoverColor = theme === 'light' ? 'hover:bg-blue-700' : 'hover:bg-blue-500';

  return (
    <div 
      className="hero-wrapper relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="navbar"
      >
        <div className={`logo ${textColor}`}>Deepan Kishore</div>
        <div className="nav-links flex space-x-6">
          <a href="#projects" className={`text-lg ${textColor} hover:text-primary`}>Projects</a>
          <a href="#about" className={`text-lg ${textColor} hover:text-primary`}>About Me</a>
          <a href="#contact" className={`text-lg ${textColor} hover:text-primary`}>Contact</a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="hero-content flex flex-col justify-center items-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-6xl font-semibold tracking-tight ${textColor}`}
        >
          Deepan Kishore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-2xl mt-4 ${subTextColor}`}
        >
          Senior Software Engineer | 5+ Years in React & Cloud Solutions
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-xl mt-4 ${subTextColor}`}
        >
          I build seamless, scalable web applications that power startups and enterprises alike.
        </motion.p>
        
        {/* Call to Action Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className={`inline-block mt-8 px-6 py-3 ${ctaBgColor} text-white text-lg rounded-lg shadow-lg ${ctaHoverColor} transition duration-300`}
        >
          Explore My Work
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 flex flex-col items-center cursor-pointer"
        >
          <Link to="about" smooth={true} duration={500}>
            <p className={`text-sm mb-2 ${textColor}`}>Scroll down</p>
            <svg className={`w-6 h-6 animate-bounce ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;