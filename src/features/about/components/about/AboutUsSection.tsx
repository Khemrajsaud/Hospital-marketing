import React from "react";
import AnimatedAboutContent from "./AnimatedAboutContent";

const AboutUsSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#D5EFF5] to-white py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-10 right-20 w-3 h-3 bg-[#01BAEF]/30 rounded-full"></div>
      <div className="absolute top-32 right-32 w-2 h-2 bg-[#01BAEF]/20 rounded-full"></div>
      <div className="absolute bottom-20 left-24 w-3 h-3 bg-[#01BAEF]/25 rounded-full"></div>
      <div className="absolute bottom-40 right-16 w-2 h-2 bg-[#01BAEF]/20 rounded-full"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-[#01BAEF]/30 rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedAboutContent />
      </div>
    </div>
  );
};

export default AboutUsSection;