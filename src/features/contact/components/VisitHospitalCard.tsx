"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const VisitHospitalCard = () => {
  const handleGetDirection = () => {
    console.log('Get Direction clicked');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
    tap: { scale: 0.97 },
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <motion.h2
        className="text-2xl font-bold text-[#0B4F6C] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Visit Hospital
      </motion.h2>

      <motion.div
        className="mb-6 rounded-lg overflow-hidden"
        variants={imageVariants}
      >
        <Image
          src="/maps.png"
          alt="Hospital location map"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>

      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleGetDirection}
        className="w-full bg-[#0B4F6C] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#094461] transition-colors duration-300"
      >
        Get Direction <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default VisitHospitalCard;