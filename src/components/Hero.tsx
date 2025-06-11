import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Icon from "./common/Icon";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-secondary">Fahad Mohammed Al-Khalidy</span>
            </h1>
            <p className="text-xl md:text-2xl text-textSecondary mb-8">
              A Computer Engineering student and Software Developer
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <Icon icon={FaGithub} size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <Icon icon={FaLinkedin} size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <Icon icon={FaTwitter} size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative w-full h-[400px]">
              <motion.div
                className="absolute inset-0 bg-secondary bg-opacity-10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-4 bg-secondary bg-opacity-20 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-8 bg-secondary bg-opacity-30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
