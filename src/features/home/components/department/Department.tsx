"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/src/components/shared/SectionHeader";
import Kidney from "../../../../../public/kidney.png";
import Eye from "../../../../../public/eye.png";
import Lung from "../../../../../public/lung.png";
import Tooth from "../../../../../public/tooth.png";
import Bone from "../../../../../public/bone.png";
import DepartmentCard from "./DepartmentCard";

const departments = [
  {
    name: "Nephrology",
    icon: Kidney,
    alt: "Kidney illustration",
    iconWidth: 140,
    iconHeight: 140,
  },
  {
    name: "Cardiology",
    icon: Eye,
    alt: "Eye",
    iconWidth: 100,
    iconHeight: 100,
  },
  {
    name: "Pulmonology",
    icon: Lung,
    alt: "Lungs illustration",
    iconWidth: 130,
    iconHeight: 130,
  },
  {
    name: "Dentistry",
    icon: Tooth,
    alt: "Tooth illustration",
    iconWidth: 100,
    iconHeight: 110,
  },
  {
    name: "Orthopedics",
    icon: Bone,
    alt: "Bone illustration",
    iconWidth: 100,
    iconHeight: 100,
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Department: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          subtitle="Our Department"
          title="Department"
          highlightedTitle="Category"
          description="Browse by department for tailored services and expert solutions"
        />

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 justify-items-center"
        >
          {departments.map((dept) => (
            <motion.div key={dept.name} variants={cardVariants}>
              <DepartmentCard department={dept} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Department;