'use client'

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

const mainTitleVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

export default function AnimatedCareContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
        <motion.div variants={titleVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4F6C] leading-tight">
            Delivering Better Care,<br />Every Day
          </h2>
        </motion.div>

        <motion.div variants={subtitleVariants}>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-semibold">
            Our healthcare team goes beyond treatment by building lasting relationships with 
            patients, understanding their unique needs, and delivering personalized care that 
            truly makes a difference. Through innovation, compassion, and clinical expertise, we 
            are setting new standards in healthcare excellence.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={mainTitleVariants}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B4F6C] leading-tight">
          We Provide Advanced Care For You
        </h1>
      </motion.div>
    </motion.div>
  );
}