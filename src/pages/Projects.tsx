import React from 'react';
import { motion } from 'framer-motion';
// import './Projects.css';

const projects = [
  {
    title: "Float Clone",
    description: "A scheduling application that integrates task management features.",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Tailwind"
  },
  {
    title: "Video Editing Tool",
    description: "An innovative video editor built using FFmpeg, focusing on user experience.",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, FFmpeg, Node.js"
  },
  {
    title: "E-commerce Platform",
    description: "A high-performance e-commerce application designed for mobile and desktop.",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Node.js"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-wrapper py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <span className="block mt-4 text-sm">{project.technologies}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;