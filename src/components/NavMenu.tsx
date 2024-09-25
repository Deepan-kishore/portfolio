import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  open: { x: 0, opacity: 1, transition: { stiffness: 100 } },
  closed: { x: '-100%', opacity: 0, transition: { stiffness: 100 } },
};

interface NavMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  theme: 'light' | 'dark';
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, closeMenu, theme }) => {
  const linkColor = theme === 'light' ? 'text-black' : 'text-white';
  const buttonColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={`fixed top-0 left-0 w-64 h-full navbar bg-opacity-90 z-40 flex flex-col items-center py-10 space-y-6`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`absolute top-4 right-4 ${buttonColor} text-2xl`}
        onClick={closeMenu}
      >
        &times;
      </motion.button>
      <a href="#projects" className={`${linkColor} text-2xl`} onClick={closeMenu}>
        Projects
      </a>
      <a href="#about" className={`${linkColor} text-2xl`} onClick={closeMenu}>
        About Me
      </a>
      <a href="#contact" className={`${linkColor} text-2xl`} onClick={closeMenu}>
        Contact
      </a>
    </motion.nav>
  );
};

export default NavMenu;