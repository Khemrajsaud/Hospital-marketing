"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-[#0B4F6C]">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#0B4F6C] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-6">
          <p className="text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};