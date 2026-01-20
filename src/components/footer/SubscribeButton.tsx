"use client";

import React from "react";

const SubscribeButton: React.FC = () => {
  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  return (
    <button 
      onClick={handleSubscribe}
      className="px-6 py-2.5 bg-white text-[#0B4F6C] rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
    >
      Subscribe
    </button>
  );
};

export default SubscribeButton;