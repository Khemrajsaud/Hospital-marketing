"use client";

import React from "react";
import { motion } from "framer-motion";
import SpecialistCard from "./SpecialistCard";
import ExcellenceBanner from "./ExcellenceBanner";
import SectionHeader from "@/src/components/shared/SectionHeader";

const specialists = [
  {
    id: 1,
    specialty: "Cardiology",
    icon: "stethoscope",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified cardiologist with 10+ years in diagnosing and treating heart disorders, emphasizing preventive care.",
    experience: "10 years exp.",
  },
  {
    id: 2,
    specialty: "Neurology",
    icon: "brain",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified neurologist with 10+ years in diagnosing neurological disorders and patient care.",
    experience: "10 years exp.",
  },
  {
    id: 3,
    specialty: "Pediatrics",
    icon: "baby",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified pediatrician with 10+ years in diagnosing and treating children's health issues.",
    experience: "10 years exp.",
  },
  {
    id: 4,
    specialty: "Ophthalmology",
    icon: "eye",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified ophthalmologist with 10+ years of experience in evaluating and managing vision disorders.",
    experience: "10 years exp.",
  },
  {
    id: 5,
    specialty: "Dentist",
    icon: "tooth",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified dentist with 10+ years of experience in providing comprehensive dental care.",
    experience: "10 years exp.",
  },
  {
    id: 6,
    specialty: "Neurosurgeon",
    icon: "surgery",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified neurosurgeon with 10+ years of experience in performing complex brain and spinal surgeries.",
    experience: "10 years exp.",
  },
];

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
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

const Specialists: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-8xl mx-auto">
        <SectionHeader
          subtitle="Expert Medical Care"
          title="Our"
          highlightedTitle="Specialists"
          description="Connect with experienced, board-certified doctors across major specialties — personalized care you can trust."
        />

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {specialists.slice(0, 4).map((specialist) => (
            <motion.div key={specialist.id} variants={cardVariants}>
              <SpecialistCard specialist={specialist} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specialists.slice(4).map((specialist) => (
            <motion.div key={specialist.id} variants={cardVariants}>
              <SpecialistCard specialist={specialist} />
            </motion.div>
          ))}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2"
          >
            <ExcellenceBanner />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Specialists;