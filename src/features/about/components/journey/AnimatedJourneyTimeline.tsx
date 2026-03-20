'use client'

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  iconName: string;
  align: "left" | "right";
}

type Props = {
  milestones: Milestone[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

const milestoneVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
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

export default function AnimatedJourneyTimeline({ milestones }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        variants={titleVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left mb-16 md:mb-20"
      >
        <span className="text-[#0B4F6C]">Our </span>
        <span className="text-[#01BAEF]">Journey</span>
      </motion.h2>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#B8E6F0] -translate-x-1/2 hidden md:block" />

        <div className="space-y-14 md:space-y-20">
          {milestones.map((milestone, index) => {
            const Icon = LucideIcons[milestone.iconName as keyof typeof LucideIcons];

            const isRight = milestone.align === "right";

            return (
              <motion.div
                key={index}
                variants={milestoneVariants}
                className="relative"
              >
                <div className="flex justify-center md:justify-start md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#01BAEF] rounded-full flex items-center justify-center shadow-lg ring-8 ring-white">
                    {Icon ? (
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    ) : (
                      <LucideIcons.HelpCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    )}
                  </div>
                </div>

                <div
                  className={`flex flex-col md:flex-row items-center md:items-start ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/11 ${
                      isRight
                        ? "md:ml-auto md:pl-8 lg:pl-12"
                        : "md:mr-auto md:pr-8 lg:pr-12"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-3 md:p-5 shadow-lg border-t-4 md:border-t-0 ${
                        isRight
                          ? "md:border-l-4 border-l-[#01BAEF]"
                          : "md:border-r-4 border-r-[#01BAEF]"
                      } transition-all duration-300 hover:shadow-[0_0_20px_#01BAEF80,0_0_40px_#01BAEF40]`}
                    >
                      <p className="text-[#01BAEF] font-bold text-lg md:text-xl">
                        {milestone.year}
                      </p>
                      <h3 className="text-[#0B4F6C] font-bold text-lg md:text-xl">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base font-semibold">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}