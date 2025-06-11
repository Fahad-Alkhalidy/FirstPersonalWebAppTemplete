import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaLaptopCode } from "react-icons/fa";
import Icon from "./common/Icon";

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
  icon: typeof FaUniversity;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Bachelor's Degree in Computer Engineering",
      period: "2021 - Present",
      description:
        "Participated in hackathons like NASA Space App and Injaz Bahrain. Maintaining a perfect 4.0 GPA.",
      icon: FaUniversity,
    },
    {
      title: "High School Degree",
      period: "2017 - 2021",
      description:
        "Ranked 11th among Bahrain graduates. Awarded by the Minister of Education. First student at school with 99.6% grade.",
      icon: FaSchool,
    },
    {
      title: "Freelance Blender Developer",
      period: "2020 - Present",
      description:
        "Designed and developed 3D animation videos. Created simulations for wheel mobile robots, camera systems, and electrical machines. Developed 3D visualizations for real-world applications.",
      icon: FaLaptopCode,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Icon
                    icon={experience.icon}
                    className="text-secondary text-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-secondary mb-2">{experience.period}</p>
                  <p className="text-textSecondary">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
