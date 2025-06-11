import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Icon from "./common/Icon";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-6">
              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <Icon icon={FaEnvelope} className="mr-3" />
                your.email@example.com
              </motion.a>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
