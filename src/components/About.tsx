import * as React from 'react';
import { motion } from 'motion/react';
import { Code, Terminal } from 'lucide-react';

export function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="max-w-8xl mx-auto px-8 py-32">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img 
              src="/profile.png" 
              alt="Chethana Keshava Shettigar"
              className="w-full h-full object-cover min-h-[400px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 bg-[#151515] rounded-3xl p-10 md:p-16 flex flex-col justify-center border border-white/5 shadow-inner"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 tracking-tight">About me</h2>
            <p className="text-base md:text-lg text-on-surface/80 leading-relaxed font-normal">
              I am an AI & Data Science student with a strong interest in data science, data analytics, data engineering, and AI/ML development. I enjoy working with data to extract meaningful insights, perform data analysis, and build intelligent solutions that solve real-world problems. I have hands-on experience in Python, SQL, data analysis, and machine learning, including tasks such as data preprocessing, visualization, and predictive modeling. I have developed projects like Dharaa AI, an AI-powered application that uses data-driven insights to help farmers make better decisions. I have also completed a cloud virtual internship, where I gained exposure to real-world tools and technologies. I aim to build a career in data science and AI-related roles, where I can leverage data to create impactful solutions.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
