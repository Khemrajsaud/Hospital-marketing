import React from "react";
import Image from 'next/image';

const OurMissionSection = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#0B4F6C] text-lg md:text-xl font-bold mb-4">
                Enhancing Patient Health Daily
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#0B4F6C]">Our </span>
                <span className="text-[#01BAEF]">Mission</span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed font-semibold">
              <p>
                We believe healthcare should be accessible, compassionate, and
                innovative. Our team of dedicated professionals works tirelessly
                to ensure every patient receives the highest quality care
                tailored to their individual needs.
              </p>

              <p>
                Through continuous learning, advanced technology, and a
                patient-first approach, we're not just treating conditions —
                we're transforming lives and building healthier communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01BAEF]/30">
              <Image
                src="/m1.png"
                alt="Doctor with tablet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01BAEF]/30">
              <Image
                src="/m2.png"
                alt="Hospital corridor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01BAEF]/30">
              <Image
                src="/m3.png"
                alt="Medical equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01BAEF]/30">
              <Image
                src="/m4.png"
                alt="Medication"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;