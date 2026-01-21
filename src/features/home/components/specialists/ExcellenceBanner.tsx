import React from "react";

const ExcellenceBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0A5470] via-[#096686] to-[#01BAEF] rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 flex flex-col items-start">
        <div className="mb-5">
          <svg
            className="w-16 h-16"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="30" width="60" height="60" fill="white" rx="4" />
            <rect x="30" y="20" width="40" height="10" fill="#01BAEF" rx="2" />
            <rect x="45" y="40" width="10" height="30" fill="#01BAEF" />
            <rect x="35" y="50" width="30" height="10" fill="#01BAEF" />
            <rect x="30" y="75" width="8" height="15" fill="#0A5470" />
            <rect x="42" y="75" width="8" height="15" fill="#0A5470" />
            <rect x="62" y="75" width="8" height="15" fill="#0A5470" />
            <circle cx="85" cy="25" r="3" fill="#FFD700" />
          </svg>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Excellence in Care
        </h3>

        <p className="text-base md:text-lg text-white/95 leading-relaxed">
          World-class expertise • Compassionate approach •<br />
          Patient-centered results
        </p>
      </div>
    </div>
  );
};

export default ExcellenceBanner;