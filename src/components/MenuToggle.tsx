import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
  theme: 'light' | 'dark';
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen, theme }) => {
  const iconColor = theme === 'light' ? '#000' : '#fff';

  return (
    <button onClick={toggle} className="focus:outline-none z-50">
      {isOpen ? (
        <FontAwesomeIcon icon={faTimes} color={iconColor} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faBars} color={iconColor} size="2x" />
      )}
    </button>
  );
};

export default MenuToggle;
