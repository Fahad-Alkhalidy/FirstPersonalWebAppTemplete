import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-textPrimary">
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
