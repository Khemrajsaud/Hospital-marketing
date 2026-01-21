"use client";

import React, { useState } from "react";

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
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
      <h3 className="text-2xl font-bold text-[#0B4F6C] mb-2">Booking Form</h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill in the details below to secure your slot.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
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
          </div>

          <div>
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
          </div>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
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
          </div>

          <div>
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
          </div>
        </div>

        <div>
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
        </div>

        <button
          type="submit"
          className="w-full bg-[#01BAEF] hover:bg-[#0A5470] text-white font-bold py-4 rounded-xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Book Appointment →
        </button>

        <div className="flex items-start gap-2">
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
        </div>
      </form>
    </div>
  );
};

export default BookingForm;