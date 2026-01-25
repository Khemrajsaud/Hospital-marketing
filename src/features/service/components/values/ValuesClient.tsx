"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, dignity, and respect. Your well being is our highest priority, and we're committed to providing care that feels personal and supportive."
  },
  {
    icon: Shield,
    title: "Trust & Secure",
    description: "Your health information is protected with bank-level encryption and HIPAA compliance. We maintain the highest standards of privacy and data security."
  },
  {
    icon: Zap,
    title: "Innovation & Excellence",
    description: "We leverage cutting-edge technology and evidence-based medicine to deliver the most effective, efficient care possible. Continuous improvement drives everything we do."
  },
  {
    icon: Users,
    title: "Compassionate Care",
    description: "Quality healthcare should be available to everyone, everywhere. We break down barriers by bringing expert medical care directly to you, wherever you need it."
  }
];

type Value = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
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

export default function ValuesClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="w-20 h-20 rounded-full bg-[#01BAEF] flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-[#0B4F6C] mb-4">
              {value.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed font-semibold">
              {value.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}