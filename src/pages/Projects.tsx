import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: "Mini Float: Agile Task Scheduling",
    subtitle: "Built for innovation, designed for performance.",
    description: "Developed in just 2 days, this task scheduling app showcases my ability to replicate key functionalities of the Float platform swiftly. It enables teams to schedule tasks, manage teams, and monitor calendars efficiently. I created this app as part of a job application for Float, highlighting my ability to execute rapid development under tight deadlines while maintaining high-quality standards.",
    callToAction: "View Demo Video (Loom)",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Tailwind"
  },
  {
    title: "Video Editor Pro: Powered by FFmpeg",
    subtitle: "Streamline your video processing with my custom-built editing tool.",
    description: "A comprehensive video editor with FFmpeg integrated for seamless multimedia operations. The tool offers both frontend and backend solutions, allowing users to edit, convert, and enhance video files quickly and effectively. This project demonstrates my ability to integrate advanced video processing libraries and build scalable applications. Launching soon!",
    callToAction: "Project Live Soon!",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, FFmpeg, Node.js"
  },
  {
    title: "Responsive Landing Page Design",
    subtitle: "A modern, pixel-perfect, and mobile-friendly landing page.",
    description: "This fully responsive landing page reflects my attention to UI/UX design, ensuring a clean and modern look across devices. Ideal for startups looking to make a strong first impression online.",
    callToAction: "Explore the Design",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Node.js"
  },
  {
    title: "Toolbox: Curated Collection of Daily Tools",
    subtitle: "Your one-stop toolkit for efficiency.",
    description: "A personal collection of tools that streamline my daily workflow, all in one place. From development to productivity, these tools represent the best resources I use regularly for code, design, and automation. Created out of necessity, this page is perfect for developers and startups seeking efficiency in their operations.",
    callToAction: "View Toolbox",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Node.js"
  },
  {
    title: "AI Chatbot Integration",
    subtitle: "Bringing AI into everyday conversations.",
    description: "This chatbot leverages AI to handle user queries in a seamless, interactive way. With intuitive design and real-time responses, this tool is perfect for startups looking to integrate automated customer service or AI-powered support into their platforms.",
    callToAction: "Try the Chatbot",
    image: "https://unsplash.com/photos/7RzBYW85a6g",
    technologies: "React, Redux, Node.js"
  }
];

const Projects: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState <null | typeof projects[0]> (null);

  const handleClose = () => setShow(false);
  const handleShow = (project :  typeof projects[0]) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <div className="projects-wrapper py-20">
      <Container>
        <h2 className="text-4xl font-semibold mb-8 text-center">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.subtitle}</Card.Text>
                    <Button variant="primary" onClick={() => handleShow(project)}>Open</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedProject && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid mb-4" />
            <h4>{selectedProject.subtitle}</h4>
            <p>{selectedProject.description}</p>
            <span className="block mt-4 text-sm">{selectedProject.technologies}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {selectedProject.callToAction}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Projects;