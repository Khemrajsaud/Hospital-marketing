'use client'

import React from "react";
import { motion } from "framer-motion";

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

const paragraphVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AnimatedWhoWeAreContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.h2
        variants={titleVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        <span className="text-[#0B4F6C]">Who </span>
        <span className="text-[#01BAEF]">We Are</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed font-semibold"
      >
        <motion.p variants={paragraphVariants}>
          We're a passionate team of healthcare professionals,
          technologists, and innovators united by a common mission: to
          transform how people access and experience healthcare.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Founded in 2016, we recognized that traditional healthcare
          systems often create unnecessary barriers between patients and
          the care they need. Long wait times, limited access to
          specialists, and geographic constraints shouldn't prevent anyone
          from receiving quality medical attention.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Today, we're proud to serve over 10,000 patients across all 50
          states, connecting them with board-certified physicians through
          our secure, easy-to-use telemedicine platform.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}