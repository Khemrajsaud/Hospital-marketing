"use client";

import { motion } from "framer-motion";

type Feature = {
  stat: string;
  title: string;
};

interface Props {
  features: Feature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUsClient({ features }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            scale: 1.06,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(1, 186, 239, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-3xl p-12 text-center shadow-lg relative"
        >
          <div className="text-5xl md:text-6xl font-bold text-[#01BAEF] mb-4">
            {feature.stat}
          </div>
          <h3 className="text-xl font-semibold text-[#0B4F6C]">
            {feature.title}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
}