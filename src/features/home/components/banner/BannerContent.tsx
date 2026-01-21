"use client";

import { useState, useEffect } from 'react';
import BannerButtons from './BannerButtons';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface BannerContentProps {
  slides: Slide[];
}

const BannerContent = ({ slides }: BannerContentProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-start">
      <div className="text-left px-24 max-w-4xl z-10" style={{ fontFamily: 'var(--font-quicksand), system-ui, sans-serif' }}>
        <div className="flex justify-start mb-4">
          <span className="text-[#01BAEF] text-7xl font-bold tracking-[0.5em] animate-pulse">
            •••
          </span>
        </div>

        <h1 className="text-white text-[50px] font-bold mb-4 leading-tight drop-shadow-lg transition-all duration-700">
          {slides[currentSlide].title}
        </h1>

        <p className="text-white/90 text-[18px] mb-5 max-w-3xl drop-shadow-md font-medium transition-all duration-700">
          {slides[currentSlide].description}
        </p>

        <BannerButtons currentSlide={currentSlide} />
      </div>
    </div>
  );
};

export default BannerContent;