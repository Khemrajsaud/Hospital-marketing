import React from 'react';
import Image from 'next/image';

const DoctorFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Get the doctor that gets you",
      buttonText: "See Specialties",
      image: "/let1.png",
      alt: "Doctor with patient illustration"
    },
    {
      id: 2,
      title: "Read reviews from users",
      buttonText: "See Reviews",
      image: "/let2.png",
      alt: "Doctor reviews illustration"
    },
    {
      id: 3,
      title: "Book an appointment today, online",
      buttonText: "Book Appointment",
      image: "/let3.png",
      alt: "Book appointment illustration"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#0B4F6C] mb-12">
          Let's get you doctor who gets you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 w-full h-48 relative flex justify-center items-center">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-6 min-h-[3rem] flex items-center">
                  {feature.title}
                </h3>
                
                <button className="w-full px-6 py-3 bg-white text-[#0B4F6C] border-2 border-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-all duration-300">
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorFeaturesSection;