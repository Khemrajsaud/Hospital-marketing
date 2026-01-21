import React from "react";

const AdvancedCareSection = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4F6C] leading-tight">
              Delivering Better Care,<br />Every Day
            </h2>
          </div>

          <div>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-semibold">
              Our healthcare team goes beyond treatment by building lasting relationships with 
              patients, understanding their unique needs, and delivering personalized care that 
              truly makes a difference. Through innovation, compassion, and clinical expertise, we 
              are setting new standards in healthcare excellence.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B4F6C] leading-tight">
            We Provide Advanced Care For You
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCareSection;