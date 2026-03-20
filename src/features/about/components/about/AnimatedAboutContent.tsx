'use client'

import React from "react";
import { motion } from "framer-motion";
import AboutUsButtons from "@/src/components/AboutUsButtons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.9,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

export default function AnimatedAboutContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        variants={titleVariants}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
      >
        <span className="text-[#0B4F6C]">About </span>
        <span className="text-[#01BAEF]">Us</span>
      </motion.h2>

      <motion.p
        variants={textVariants}
        className="text-[#0B4F6C] text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-3xl mx-auto"
      >
        We're revolutionizing healthcare by making quality medical care accessible,
        affordable, and available to everyone, anywhere, anytime.
      </motion.p>

      <motion.div variants={buttonsVariants}>
        <AboutUsButtons />
      </motion.div>
    </motion.div>
  );
}