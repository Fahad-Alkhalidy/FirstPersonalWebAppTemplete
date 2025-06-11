import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiDotnet } from "react-icons/si";
import Icon from "./common/Icon";

interface Skill {
  name: string;
  icon: typeof FaHtml5;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: "HTML5", icon: FaHtml5, level: 90, category: "frontend" },
    { name: "CSS3", icon: FaCss3Alt, level: 85, category: "frontend" },
    { name: "JavaScript", icon: FaJs, level: 90, category: "frontend" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 85,
      category: "frontend",
    },
    { name: "React", icon: FaReact, level: 88, category: "frontend" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, level: 85, category: "backend" },
    { name: "Java", icon: FaJava, level: 80, category: "backend" },
    { name: "C#", icon: SiDotnet, level: 85, category: "backend" },
    { name: "Python", icon: FaPython, level: 75, category: "backend" },

    // Database
    { name: "MongoDB", icon: SiMongodb, level: 85, category: "database" },
    {
      name: "SQL Server",
      icon: FaDatabase,
      level: 80,
      category: "database",
    },

    // Tools
    { name: "Git", icon: FaGitAlt, level: 85, category: "tools" },
  ];

  const categories = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools",
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([key, title]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-secondary">{title}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === key)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-textSecondary mr-2">
                            <Icon
                              icon={skill.icon}
                              className="text-textSecondary"
                            />
                          </span>
                          <span className="text-textSecondary">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-textSecondary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-secondary h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
