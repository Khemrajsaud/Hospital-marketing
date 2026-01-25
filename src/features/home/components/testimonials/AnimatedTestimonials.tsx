'use client'

import React from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "./TestimonialSlider";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
};

type Props = {
  testimonials: Testimonial[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
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

export default function AnimatedTestimonials({ testimonials }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mt-12"
    >
      <motion.div variants={itemVariants}>
        <TestimonialSlider testimonials={testimonials} />
      </motion.div>
    </motion.div>
  );
}