"use client";

import { motion } from "framer-motion";
import { Stethoscope, Pill, HeartPulse, FlaskConical, Calendar } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Virtual Consultations",
    description: "Connect with board-certified doctors via secure video or chat — anytime, from anywhere."
  },
  {
    icon: Pill,
    title: "Digital Prescriptions",
    description: "Receive e-prescriptions instantly sent to your pharmacy of choice for quick & contactless pickup."
  },
  {
    icon: HeartPulse,
    title: "Chronic Care",
    description: "Ongoing support for diabetes, hypertension, and other conditions with remote monitoring tools."
  },
  {
    icon: FlaskConical,
    title: "Lab & Test Results",
    description: "View results in real-time, track trends, and discuss directly with your care team."
  },
  {
    icon: Calendar,
    title: "Specialist Referrals",
    description: "Fast access to dermatology, pediatrics, nutrition, and other specialized virtual care."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function OfferClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.06, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="w-20 h-20 rounded-full border-3 border-[#00B4D8] flex items-center justify-center hover:bg-[#00B4D8] hover:border-[#00B4D8] transition-all duration-300 group"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Icon 
                  className="w-10 h-10 text-[#01BAEF] group-hover:text-white transition-colors duration-300" 
                  strokeWidth={2} 
                />
              </motion.div>
            </div>
            <h3 className="text-lg font-bold text-[#0B4F6C] mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}