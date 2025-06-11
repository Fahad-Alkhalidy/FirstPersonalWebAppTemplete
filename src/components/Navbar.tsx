import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Icon from "./common/Icon";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-background bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            Fahad
          </motion.a>

          <div className="hidden md:flex space-x-8">
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              About
            </motion.a>
            <motion.a
              href="#experience"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Experience
            </motion.a>
            <motion.a
              href="#skills"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Contact
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              {isOpen ? (
                <Icon icon={FaTimes} size={24} />
              ) : (
                <Icon icon={FaBars} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background"
        >
          <div className="px-4 py-2 space-y-4">
            <a
              href="#about"
              className="block text-textSecondary hover:text-secondary transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-textSecondary hover:text-secondary transition-colors duration-300"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block text-textSecondary hover:text-secondary transition-colors duration-300"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-textSecondary hover:text-secondary transition-colors duration-300"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-textSecondary hover:text-secondary transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
