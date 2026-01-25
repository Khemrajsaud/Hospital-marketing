"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
  tap: { scale: 0.98 },
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    fullName: "",
    phone: "",
    symptoms: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-bold text-[#0B4F6C] mb-2"
      >
        Booking Form
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="text-gray-500 text-sm mb-6"
      >
        Fill in the details below to secure your slot.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        className="space-y-5"
      >
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] bg-white text-gray-700"
              required
            >
              <option value="">Select department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="ophthalmology">Ophthalmology</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Select Doctor
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] bg-white text-gray-700"
              required
            >
              <option value="">Select Doctor</option>
              <option value="dr-shrestha">Dr. Sakshyam Shrestha</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] text-gray-700"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
            Preferred time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="00 : 00     AM : PM"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] text-gray-700"
            required
          />
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] text-gray-700"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone no."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] text-gray-700"
              required
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
            Briefly Describe Symptoms
          </label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Explain your condition..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] resize-none text-gray-700"
            required
          />
        </motion.div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          type="submit"
          className="w-full bg-[#01BAEF] hover:bg-[#0A5470] text-white font-bold py-4 rounded-xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Book Appointment →
        </motion.button>

        <motion.div
          variants={itemVariants}
          className="flex items-start gap-2"
        >
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#01BAEF] border-gray-300 rounded focus:ring-[#01BAEF]"
            required
          />
          <label className="text-gray-600 text-sm">
            Agree to our{" "}
            <a href="#" className="text-[#01BAEF] underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-[#01BAEF] underline">
              Privacy Policy
            </a>
            .
          </label>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default BookingForm;