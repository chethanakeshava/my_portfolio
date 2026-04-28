import * as React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

export function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6">
        {/* Light Source Effect */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(255,193,115,0.08),transparent)]" />
        
        <div className="max-w-4xl w-full text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-on-surface leading-tight mb-4"
          >
            Chethana Keshava Shettigar
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-8 md:h-10 mb-8"
          >
            <p className="typing-text text-xl md:text-2xl font-light text-on-surface-variant italic"></p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Hi, I'm Chethana — an AI & Data Science student interested in data analytics, data engineering, and AI/ML development. Exploring the intersection of human logic and machine intelligence.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/10"
            >
              View Projects
            </a>
            <a 
              href="/resume_portfolio.pdf" 
              download="Chethana_Keshava_Resume.pdf"
              className="px-8 py-4 bg-surface-container-high text-on-surface text-xs font-bold tracking-widest rounded-full border border-white/5 hover:bg-surface-container-highest transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div id="about">
        <About />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
