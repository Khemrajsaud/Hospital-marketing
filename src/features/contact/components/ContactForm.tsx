"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  message: string;
  agreed: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
    agreed: false
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#0B4F6C] mb-6">Send Message</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-[#0B4F6C] font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name..."
            className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-[#0B4F6C] font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email..."
            className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-[#0B4F6C] font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address..."
            className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-[#0B4F6C] font-bold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number..."
            className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-[#0B4F6C] font-bold mb-2">Briefly Describe Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            rows={4}
            className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#0B4F6C] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#094461] transition-colors"
        >
          Submit <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-1 accent-[#01BAEF]"
          />
          <p className="text-sm text-gray-600 font-semibold">
            Agree to our{' '}
            <a href="#" className="text-[#01BAEF] hover:underline">Terms of Service</a>
            {' '}&{' '}
            <a href="#" className="text-[#01BAEF] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;