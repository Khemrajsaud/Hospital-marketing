"use client";

import React from "react";
import { useRouter } from "next/navigation";

const AboutUsButtons: React.FC = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/about");
  };

  const handleContact = () => {
    router.push("/contact");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button 
        onClick={handleLearnMore}
        className="bg-[#0A5470] hover:bg-[#096686] text-white font-bold px-8 py-4 rounded-2xl transition-colors duration-300 text-lg"
      >
        Learn More About Us
      </button>
      <button 
        onClick={handleContact}
        className="border-2 border-[#0A5470] text-[#0A5470] hover:bg-[#0A5470] hover:text-white font-bold px-8 py-4 rounded-2xl transition-colors duration-300 text-lg"
      >
        Contact Us
      </button>
    </div>
  );
};

export default AboutUsButtons;