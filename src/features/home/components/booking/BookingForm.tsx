"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingButton from "./BookingButton";

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

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    email: "",
    fullName: "",
    phone: "",
    symptoms: "",
    agreedToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsLoading(false);
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
      className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
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
        {/* Department and Doctor Selection */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] bg-white text-gray-700"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] bg-white text-gray-700"
              required
            >
              <option value="">Select Doctor</option>
              <option value="dr-shrestha">Dr. Sakshyam Shrestha</option>
            </select>
          </motion.div>
        </motion.div>

        {/* Date and Time Selection */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] text-gray-700"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] text-gray-700"
              required
            />
          </motion.div>
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] text-gray-700"
            required
          />
        </motion.div>

        {/* Full Name and Phone Number */}
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] text-gray-700"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-[#0B4F6C] font-semibold mb-2 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone no."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] text-gray-700"
              required
            />
          </motion.div>
        </motion.div>

        {/* Symptoms Description */}
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
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] resize-none text-gray-700"
            required
          />
        </motion.div>

        {/* Submit Button - Using Separate Component */}
        <BookingButton 
          isLoading={isLoading}
          disabled={!formData.agreedToTerms}
        />

        {/* Terms and Conditions Checkbox */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-2"
        >
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#0B4F6C] border-gray-300 rounded focus:ring-[#0B4F6C]"
            required
          />
          <label className="text-gray-600 text-sm">
            Agree to our{" "}
            <a href="#" className="text-[#0B4F6C] underline hover:text-[#083d54]">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-[#0B4F6C] underline hover:text-[#083d54]">
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