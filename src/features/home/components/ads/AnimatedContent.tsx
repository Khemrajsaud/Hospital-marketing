'use client'

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/src/components/shared/CTAButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const buttonContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
};

export default function AnimatedContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h3
        variants={titleVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md"
      >
        Ready to Take Control of Your Health?
      </motion.h3>

      <motion.p
        variants={textVariants}
        className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow"
      >
        Join thousands of patients who trust us for their healthcare needs.
        Book your first appointment today and experience the difference.
      </motion.p>

      <motion.div
        variants={buttonContainerVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <CTAButton
          href="#book-appointment"
          variant="primary"
          text="Get Started Now"
        />
        <CTAButton
          href="/contact"
          variant="secondary"
          text="Learn More"
        />
      </motion.div>
    </motion.div>
  );
}