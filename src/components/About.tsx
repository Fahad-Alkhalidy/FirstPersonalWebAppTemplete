import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRobot } from "react-icons/fa";
import Icon from "./common/Icon";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <div className="text-secondary text-4xl mb-4">
              <Icon
                icon={FaGraduationCap}
                className="text-secondary text-4xl"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-textSecondary">
              Currently pursuing a Bachelor's degree in Computer Engineering
              with a perfect 4.0 GPA. Ranked 11th among Bahrain graduates and
              awarded by the Minister of Education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <div className="text-secondary text-4xl mb-4">
              <Icon icon={FaCode} className="text-secondary text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Software Development</h3>
            <p className="text-textSecondary">
              Passionate about creating efficient and scalable software
              solutions. Experienced in full-stack development with modern
              technologies and frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <div className="text-secondary text-4xl mb-4">
              <Icon icon={FaRobot} className="text-secondary text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">3D Design & Animation</h3>
            <p className="text-textSecondary">
              Skilled in 3D modeling, animation, and simulation. Created
              visualizations for wheel mobile robots, camera systems, and
              electrical machines.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-textSecondary max-w-3xl mx-auto">
            I am constantly seeking opportunities to apply my skills in
            networking and software development, while maintaining a strong
            focus on continuous learning and professional growth. My experience
            in hackathons like NASA Space App and Injaz Bahrain has further
            enhanced my problem-solving abilities and technical expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
