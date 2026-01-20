"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-white text-[#0B4F6C] w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

export default ScrollToTopButton;