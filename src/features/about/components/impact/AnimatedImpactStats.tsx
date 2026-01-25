'use client'

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface Stat {
  iconName: string;
  number: string;
  label: string;
}

type Props = {
  stats: Stat[];
};

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

const headerVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
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

export default function AnimatedImpactStats({ stats }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <motion.div variants={headerVariants} className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
          Real results from people who trust us with their healthcare
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = LucideIcons[stat.iconName as keyof typeof LucideIcons];

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:bg-white/20"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  {Icon ? (
                    <Icon className="w-8 h-8 text-white" />
                  ) : (
                    <LucideIcons.HelpCircle className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>

              <div className="text-white/90 text-base md:text-lg font-medium">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}