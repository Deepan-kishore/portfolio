import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MenuToggle from '../components/MenuToggle';
import NavMenu from '../components/NavMenu';

const Hero: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = theme === 'light'
    ? 'https://images.unsplash.com/photo-1629904888099-00285934292b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const subTextColor = theme === 'light' ? 'text-gray-700' : 'text-gray-200';
  const ctaBgColor = theme === 'light' ? 'bg-blue-600' : 'bg-blue-400';
  const ctaHoverColor = theme === 'light' ? 'hover:bg-blue-700' : 'hover:bg-blue-500';

  return (
    <div className="hero-wrapper relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="topbar fixed top-0 w-full flex justify-between items-center px-6 py-4 md:px-10 md:py-6 bg-black bg-opacity-25 backdrop-blur-sm z-50"
      >
        <div className={`logo ${textColor} text-lg md:text-xl`}>Deepan Kishore</div>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} theme={theme} />
      </motion.nav>

      {/* Sidebar */}
      <NavMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} theme={theme} />

      {/* Hero Content */}
      <div className="hero-content flex flex-col justify-center items-center h-full text-center px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl font-semibold tracking-tight ${textColor}`}
        >
          Deepan Kishore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-lg md:text-2xl mt-4 ${subTextColor}`}
        >
          Senior Software Engineer | 5+ Years in React & Backend Solutions
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-base md:text-xl mt-4 ${subTextColor} hidden sm:block`}
        >
          I build seamless, scalable web applications that power startups and enterprises alike.
        </motion.p>
        
        {/* Call to Action Button */}
        <Link to="projects" smooth={true} duration={500}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${ctaBgColor} text-white  rounded-lg shadow-lg ${ctaHoverColor} transition duration-300 cta-button `}
          >
            Explore my work
          </motion.div>
        </Link>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 flex flex-col items-center cursor-pointer"
        >
          <Link to="about" smooth={true} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className={`text-3xl ${textColor} mt-4`}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
