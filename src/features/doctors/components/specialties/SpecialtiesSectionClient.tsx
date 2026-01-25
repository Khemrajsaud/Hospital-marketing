"use client";

import { motion } from "framer-motion";
import Kidney from "../../../../../public/kidney.png";
import Eye from "../../../../../public/eye.png";
import Lung from "../../../../../public/lung.png";
import Tooth from "../../../../../public/tooth.png";
import Bone from "../../../../../public/bone.png";
import SpecialtiesCard from "./SpecialtiesCard";

const specialtiesData = [
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
    alt: "Eye illustration",
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function SpecialtiesSectionClient() {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 justify-items-center mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {specialtiesData.map((specialty) => (
        <motion.div key={specialty.name} variants={cardVariants}>
          <SpecialtiesCard specialty={specialty} />
        </motion.div>
      ))}
    </motion.div>
  );
}