import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "ClimaView",
    description: "A modern Power BI dashboard delivering real-time weather insights, pollution trends, and predictive analysis using API-based data.",
    image: "/imageweather1.jpg",
    link: "https://github.com/chethanakeshava/ClimaView-Real-Time-Weather-Forecast-Dashboard"
  },
  {
    title: "DharaaBot",
    description: "An AI-powered chatbot built with Flask and the Gemini API, featuring a modern responsive chat interface.",
    image: "/image_1.avif",
    link: "https://github.com/chethanakeshava/DharaaBot/"
  },
  {
    title: "Crop Rotation Advisor",
    description: "ML-powered recommendation system suggesting optimal crop sequences for sustainable farming practices.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/Crop_Rotation_Advisor"
  },
  {
    title: "Crypto Sentiment Analysis",
    description: "Analyzing the impact of Bitcoin Fear & Greed sentiment on trader performance, evaluating P&L and win rates.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/Sentiment-Driven-Crypto-Trading-Analysis"
  },
  {
    title: "Crop Recommendation System",
    description: "Machine learning model predicting optimal crops based on soil nutrients and environmental conditions using Logistic Regression.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/Miniproject-crop-recommendation"
  },
  {
    title: "Customer Behavior Dashboard",
    description: "Interactive Power BI dashboard analyzing 3,900 transaction records to identify spending patterns and customer preferences.",
    image: "/customer.webp",
    link: "https://github.com/chethanakeshava/Customer-Behavior-Dashboard"
  },
  {
    title: "AI Weather Forecast",
    description: "A Django-powered weather application utilizing the OpenWeatherMap API and Random Forest models to predict future rain and temperature trends.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/AI-Based-Weather-Forecast-Web-Application"
  },
  {
    title: "StoreFlow",
    description: "A Flask-based grocery management system designed to simplify and automate grocery store operations, featuring product management and order tracking.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/StoreFlow"
  },
  {
    title: "Daily Reflection Tree",
    description: "A deterministic state-tracking decision tree guiding employees through structured end-of-day psychological reflection.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://github.com/chethanakeshava/dt-reflection-tree"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="max-w-7xl mx-auto py-32 px-6 overflow-hidden">
      <header className="mb-20 text-center">
        <p className="text-primary text-xs tracking-[0.2em] uppercase font-semibold mb-4">Selected Works</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
          Project<br /><span className="text-primary-container">Chronicles.</span>
        </h1>
      </header>

      <div className="relative group">
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 px-2 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-surface-container-high text-on-surface shadow-xl pointer-events-auto hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-surface-container-high text-on-surface shadow-xl pointer-events-auto hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="overflow-hidden">
          <motion.div 
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex"
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {projects.slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage).map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/30 hover:bg-outline-variant/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, link }: any) {
  return (
    <motion.article 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/10 flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <a 
        href={link} 
        target={link === "#" ? undefined : "_blank"}
        rel={link === "#" ? undefined : "noopener noreferrer"}
        className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 bg-surface-container shadow-inner block"
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </a>
      <h2 className="text-xl font-black uppercase tracking-tight text-on-surface mb-6 leading-tight max-w-[200px]">
        {title}
      </h2>
      <p className="text-on-surface-variant text-sm leading-relaxed font-light">
        {description}
      </p>
    </motion.article>
  );
}
