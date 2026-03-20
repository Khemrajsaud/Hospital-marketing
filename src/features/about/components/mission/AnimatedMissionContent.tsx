'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.9,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function AnimatedMissionContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      {/* Left side - Text */}
      <motion.div variants={containerVariants} className="space-y-6">
        <motion.div variants={containerVariants}>
          <motion.p
            variants={subtitleVariants}
            className="text-[#0B4F6C] text-lg md:text-xl font-bold mb-4"
          >
            Enhancing Patient Health Daily
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-[#0B4F6C]">Our </span>
            <span className="text-[#01BAEF]">Mission</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed font-semibold"
        >
          <motion.p variants={textVariants}>
            We believe healthcare should be accessible, compassionate, and
            innovative. Our team of dedicated professionals works tirelessly
            to ensure every patient receives the highest quality care
            tailored to their individual needs.
          </motion.p>

          <motion.p variants={textVariants}>
            Through continuous learning, advanced technology, and a
            patient-first approach, we're not just treating conditions —
            we're transforming lives and building healthier communities.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Right side - Images grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: "/m1.png", alt: "Doctor with tablet" },
          { src: "/m2.png", alt: "Hospital corridor" },
          { src: "/m3.png", alt: "Medical equipment" },
          { src: "/m4.png", alt: "Medication" },
        ].map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-64 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01BAEF]/30"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}