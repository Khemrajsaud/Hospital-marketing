"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "../service/ServiceCard";

type Service = {
  number: string;
  iconName: 'video' | 'stethoscope' | 'fileText' | 'pill' | 'activity' | 'heart';
  title: string;
  description: string;
  features: string[];
  buttonText: string;
};

interface Props {
  services: Service[];
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
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

export default function HealthClient({ services }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ServiceCard
            number={service.number}
            iconName={service.iconName}
            title={service.title}
            description={service.description}
            features={service.features}
            buttonText={service.buttonText}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}