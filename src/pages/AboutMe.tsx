import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-wrapper py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="about-me-photo w-full md:w-1/2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://unsplash.com/photos/MNIkP6ZC5ac" alt="Deepan Kishore" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="about-me-text w-full md:w-1/2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I’m a passionate React Developer with 5 years of experience in building responsive, user-centric applications. My expertise lies in creating seamless interactions and optimizing performance for web applications. I thrive in fast-paced startup environments, where innovation and adaptability are key.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;