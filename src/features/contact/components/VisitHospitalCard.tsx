"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const VisitHospitalCard = () => {
  const handleGetDirection = () => {
    console.log('Get Direction clicked');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#0B4F6C] mb-6">Visit Hospital</h2>
      <div className="mb-6 rounded-lg overflow-hidden">
        <Image
          src="/maps.png"
          alt="Hospital location map"
          width={500}          
          height={300}         
          className="w-full h-auto object-cover"
          priority             
        />
      </div>

      <button
        onClick={handleGetDirection}
        className="w-full bg-[#0B4F6C] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#094461] transition-colors"
      >
        Get Direction <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default VisitHospitalCard;