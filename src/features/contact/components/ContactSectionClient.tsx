"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Users } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    subtitle: '24/7 Availability',
    info: '+977 - 9812345678',
    color: 'text-cyan-500'
  },
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'Quick Reply',
    info: 'support@health.com',
    color: 'text-cyan-500'
  },
  {
    icon: MapPin,
    title: 'Location',
    subtitle: 'Nepal',
    info: 'Kalagaun, Karnali Provincial',
    color: 'text-cyan-500'
  },
  {
    icon: Users,
    title: 'Support',
    subtitle: 'Always On',
    info: 'Explore',
    link: true,
    color: 'text-cyan-500'
  }
];

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
  hidden: { opacity: 0, y: 50, scale: 0.92 },
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

export default function ContactSectionClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {contactCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(1, 186, 239, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl p-6 shadow-md relative"
          >
            <div className={`${card.color} mb-4`}>
              <IconComponent className="w-8 h-8 text-[#01BAEF]" />
            </div>
            <h3 className="text-[#0B4F6C] font-bold text-lg mb-1">{card.title}</h3>
            <p className="text-gray-600 font-semibold text-sm mb-3">{card.subtitle}</p>
            <p className="text-[#0B4F6C] font-bold text-md">
              {card.link ? (
                <span className="flex items-center gap-1 text-[#0B4F6C]">
                  {card.info} →
                </span>
              ) : (
                card.info
              )}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}