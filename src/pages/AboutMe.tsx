import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-wrapper py-20 bg-gray-50">
      <div className="row mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Column: Image */}
        <motion.div
          className="about-me-photo w-full md:w-4/12 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Deepan Kishore" 
            style={{height:"auto",width:"100%"}}
          />
        </motion.div>
        
        {/* Right Column: Text Content */}
        <motion.div
          className="about-me-text w-full md:w-8/12 p-4 md:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-semibold mb-4">Hi, I'm Deepan Kishore</h2>
          <h3 className="text-2xl font-medium mb-4">Senior Software Engineer | 5+ Years in Front-End Development & Backend Solutions</h3>
          <p className="text-lg mb-4">
            I specialize in building seamless, scalable web applications that empower startups and enterprises. Throughout my career, I have led teams in developing innovative applications and driving projects from concept to completion.
          </p>
          <h4 className="text-2xl font-semibold mb-2">Skills</h4>
          <ul className="list-disc list-inside mb-4">
            <li className="text-lg"><strong>ReactJS:</strong> Expert in crafting user-friendly interfaces.</li>
            <li className="text-lg"><strong>Node.js:</strong> Proficient in developing RESTful APIs and backend services.</li>
            <li className="text-lg"><strong>FFmpeg:</strong> Experienced in working on video processing projects, leveraging FFmpeg for multimedia applications.</li>
            <li className="text-lg"><strong>Python:</strong> Building basic projects to enhance my backend development skills.</li>
          </ul>
          <p className="text-lg mb-4">
            I believe in writing clean, maintainable code and fostering collaboration within teams. Continuous learning and adaptation are integral to my development process, ensuring I stay ahead in this ever-evolving tech landscape.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy exploring new technologies, playing chess, and contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
