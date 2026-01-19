"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

import heroBg1 from '../../../../public/image64.png';
import heroBg2 from '../../../../public/image65.png';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: heroBg1.src,
    title: "Your Health is Our Priority",
    description: "Book appointments, consult doctors online, and manage your healthcare — all in one secure platform.",
  },
  {
    image: heroBg2.src,
    title: "Expertise You Can Rely On Care You Can Feel",
    description: "Guided by expertise you can rely on and care you can feel, our mission is to provide high-quality, patient-centered healthcare at an affordable cost, especially for the people and underserved communities of Nepal’s far-western region.",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] min-h-[500px] overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover brightness-[0.65] contrast-[1.05]"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="text-left px-24 max-w-4xl font-sans z-10">
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

          {/* Conditional Button Rendering */}
          <div className="flex gap-6">
            {currentSlide === 0 ? (
              <>
                <button
                  className="bg-[#0B4F6C] hover:bg-[#0a3d55] text-white font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Book Appointment
                </button>
                <button
                  className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black text-white font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 hover:shadow-xl"
                >
                  Learn More
                </button>
              </>
            ) : (
              <button
                className="bg-white hover:bg-gray-100 text-[#0B4F6C] font-bold py-5 px-12 rounded-xl text-[18px] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Discover Me
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;