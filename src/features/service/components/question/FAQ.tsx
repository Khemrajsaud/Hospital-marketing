"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes, your data is completely secure. We use bank-level encryption and are fully HIPAA compliant. All your health information is protected with industry-leading security measures, and we never share your data without your explicit consent."
    },
    {
      question: "Do I need insurance?",
      answer: "No, insurance is not required. We offer transparent, affordable pricing for all our services. However, we do accept most major insurance plans if you prefer to use your coverage. You can pay out-of-pocket or submit claims to your insurance provider."
    },
    {
      question: "Can I consult for emergencies?",
      answer: "Our virtual consultations are ideal for non-emergency medical concerns. For life-threatening emergencies, please call 911 or visit your nearest emergency room immediately. We can help with urgent care needs, follow-ups, and many common health issues."
    },
    {
      question: "How do virtual consultations work?",
      answer: "Virtual consultations are simple and convenient. Book an appointment through our platform, and at your scheduled time, connect with a board-certified doctor via secure video or chat. The doctor will diagnose your condition, recommend treatment, and send prescriptions directly to your pharmacy if needed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#0B4F6C] text-sm font-semibold mb-3 tracking-wide">
            Few Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-6">
            Frequently Asked <span className="text-[#00B4D8]">Questions</span>
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-[#0B4F6C] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#0B4F6C] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;