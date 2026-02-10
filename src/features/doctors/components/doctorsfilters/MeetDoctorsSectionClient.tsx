"use client";

import { motion } from "framer-motion";
import DoctorsSearchForm from "./DoctorsSearchForm";

export default function MeetDoctorsSectionClient() {
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

  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <motion.p
          className="text-[#0B4F6C] text-lg md:text-xl font-semibold mb-3"
          variants={itemVariants}
        >
          Meet Expert Doctors For Better Care
        </motion.p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-[#0B4F6C]">Let's Meet With </span>
          <motion.span
            className="text-[#01BAEF] inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Expert Doctors
          </motion.span>
        </h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg max-w-3xl"
          variants={itemVariants}
        >
          Connect with experienced doctors who are dedicated to delivering
          reliable care and precise guidance.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <DoctorsSearchForm />
      </motion.div>
    </motion.div>
  );
}