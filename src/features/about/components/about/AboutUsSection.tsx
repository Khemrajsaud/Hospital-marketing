import React from "react";
import AboutUsButtons from "@/src/components/AboutUsButtons";

const AboutUsSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#D5EFF5] to-white py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-10 right-20 w-3 h-3 bg-[#01BAEF]/30 rounded-full"></div>
      <div className="absolute top-32 right-32 w-2 h-2 bg-[#01BAEF]/20 rounded-full"></div>
      <div className="absolute bottom-20 left-24 w-3 h-3 bg-[#01BAEF]/25 rounded-full"></div>
      <div className="absolute bottom-40 right-16 w-2 h-2 bg-[#01BAEF]/20 rounded-full"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-[#01BAEF]/30 rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-[#0B4F6C]">About </span>
          <span className="text-[#01BAEF]">Us</span>
        </h2>

        <p className="text-[#0B4F6C] text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
          We're revolutionizing healthcare by making quality medical care accessible,
          affordable, and available to everyone, anywhere, anytime.
        </p>

        <AboutUsButtons />
      </div>
    </div>
  );
};

export default AboutUsSection;