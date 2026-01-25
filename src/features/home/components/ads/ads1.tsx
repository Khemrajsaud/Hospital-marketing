import React from "react";
import AnimatedContent from "./AnimatedContent";

const Ads1: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#0A5470] via-[#096686] to-[#03ABDD] px-8 py-12 md:px-12 md:py-16 text-center relative"
      style={{ fontFamily: 'var(--font-quicksand), system-ui, sans-serif' }}
    >
      <div className="relative z-10">
        <AnimatedContent />
      </div>
    </div>
  );
};

export default Ads1;