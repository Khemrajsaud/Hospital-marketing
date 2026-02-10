"use client";

import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

export default function FAQAccordionClient({ faqs }) {
  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
}