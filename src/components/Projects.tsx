import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./common/Icon";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Project 2",
      description:
        "A mobile application for tracking daily tasks and productivity.",
      image: "/project2.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "#",
    },
    {
      title: "Project 3",
      description: "An AI-powered chatbot for customer service automation.",
      image: "/project3.jpg",
      technologies: ["Python", "TensorFlow", "Flask"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors duration-300"
                  >
                    <Icon icon={FaGithub} size={24} />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors duration-300"
                    >
                      <Icon icon={FaExternalLinkAlt} size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
