'use client'

import { motion } from "framer-motion";

type Stat = {
  number: string;
  label: string;
  description: string;
};

type Props = {
  stats: Stat[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AnimatedContent({ stats }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-3"
      >
        Why choose us
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-black text-sm mb-10 font-bold uppercase tracking-wide"
      >
        PROVIDED BY: Licensed medical experts
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="mb-3">
              <span className="text-5xl md:text-5xl font-semibold text-[#0B4F6C]">
                {stat.number}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#01BAEF]">
                +
              </span>
            </div>
            <h3 className="text-black font-bold text-lg mb-2">{stat.label}</h3>
            <p className="text-gray-500 text-sm font-semibold leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}