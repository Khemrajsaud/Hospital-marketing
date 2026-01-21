"use client";

import React from 'react';

interface BannerButtonsProps {
  currentSlide: number;
}

const BannerButtons = ({ currentSlide }: BannerButtonsProps) => {
  const handleBookAppointment = () => {
    console.log('Book appointment clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  const handleDiscoverMe = () => {
    console.log('Discover me clicked');
  };

  return (
    <div className="flex gap-6">
      {currentSlide === 0 ? (
        <>
          <button
            onClick={handleBookAppointment}
            className="bg-[#0B4F6C] hover:bg-[#0a3d55] text-white font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Appointment
          </button>
          <button
            onClick={handleLearnMore}
            className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black text-white font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 hover:shadow-xl"
          >
            Learn More
          </button>
        </>
      ) : (
        <button
          onClick={handleDiscoverMe}
          className="bg-white hover:bg-gray-100 text-[#0B4F6C] font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          Discover Me
        </button>
      )}
    </div>
  );
};

export default BannerButtons;