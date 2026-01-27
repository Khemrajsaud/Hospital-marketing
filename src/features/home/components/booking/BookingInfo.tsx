"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Lock } from "lucide-react";

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

const featureVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BookingInfo: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "Availability",
      description: "See live slots for all departments",
    },
    {
      icon: CheckCircle,
      title: "Instant confirmation",
      description: "Receive email & SMS alerts immediately",
    },
    {
      icon: Lock,
      title: "Secure data",
      description: "HIPAA compliant patient information",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.p
        variants={titleVariants}
        className="text-[#0B4F6C] font-semibold text-base mb-3"
      >
        Book Appointment
      </motion.p>

      <motion.h2
        variants={titleVariants}
        className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-4"
      >
        Schedule Your Doctor Visit{" "}
        <span className="text-[#01BAEF]">Online</span>
      </motion.h2>

      <motion.p
        variants={textVariants}
        className="text-gray-600 text-base mb-8 leading-relaxed"
      >
        Experience hassle-free healthcare scheduling with our advanced
        management system. Fast, secure, and reliable.
      </motion.p>

      <motion.div variants={containerVariants} className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={featureVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 8px 24px -4px rgba(1, 186, 239, 0.2)",
              transition: { duration: 0.3 }
            }}
            className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-[#01BAEF]/10 flex items-center justify-center flex-shrink-0">
              <feature.icon
                className="w-6 h-6 text-[#01BAEF]"
                strokeWidth={2}
              />
            </div>
            <div>
              <h3 className="text-[#0B4F6C] font-semibold text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BookingInfo;