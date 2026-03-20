'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import SubscribeButton from "./SubscribeButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
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
      ease: "easeOut" as const,
    },
  },
};

export default function AnimatedFooterContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Logo</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Making healthcare simple, accessible, and personal for everyone. Your health journey starts here.
        </p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-lg bg-[#0A3F56] border border-[#1a5f7a] text-white placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] transition-colors text-sm"
            />
            <SubscribeButton />
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Find Doctor
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Book Appointment
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Online Consultation
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Health Records
            </Link>
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-3">
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Mail className="text-[#01BAEF] w-5 h-5 mt-0.5 flex-shrink-0" />
            <a href="mailto:support@healthconnect.com" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              support@healthconnect.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="text-[#01BAEF] w-5 h-5 mt-0.5 flex-shrink-0" />
            <a href="tel:+977-9812345678" className="text-gray-300 hover:text-[#01BAEF] transition-colors text-sm">
              +977-9812345678
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="text-[#01BAEF] w-5 h-5 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 text-sm">Kathmandu, Nepal</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}