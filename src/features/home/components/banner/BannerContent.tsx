"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BannerButtons from './BannerButtons';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface BannerContentProps {
  slides: Slide[];
}

const BannerContent = ({ slides }: BannerContentProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="text-left px-24 max-w-4xl z-10 w-full"
          style={{ fontFamily: 'var(--font-quicksand), system-ui, sans-serif' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div 
            className="flex justify-start mb-4"
            variants={textVariants}
          >
            <span className="text-[#01BAEF] text-7xl font-bold tracking-[0.5em] animate-pulse">
              •••
            </span>
          </motion.div>

          <motion.h1
            className="text-white text-[50px] font-bold mb-4 leading-tight drop-shadow-lg"
            variants={textVariants}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="text-white/90 text-[18px] mb-5 max-w-3xl drop-shadow-md font-medium"
            variants={textVariants}
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div variants={textVariants}>
            <BannerButtons currentSlide={currentSlide} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerContent;