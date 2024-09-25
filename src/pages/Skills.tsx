import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Redux', icon: '/icons/redux.png' },
  { name: 'Node.js', icon: '/icons/nodejs.png' },
  { name: 'FFmpeg', icon: '/icons/ffmpeg.png' },
  { name: 'AWS', icon: '/icons/aws.png' },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-wrapper">
      <h2 className="skills-heading">Skillset</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;