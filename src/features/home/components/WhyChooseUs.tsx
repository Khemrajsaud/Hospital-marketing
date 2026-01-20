import React from "react";
import Image from "next/image";
import Image1 from "../../../../public/doctors1.png";

const WhyChooseUs: React.FC = () => {
  const stats = [
    {
      number: "10",
      label: "Years of experience",
      description:
        "We have been working since 2012. Improving the quality of services every day.",
    },
    {
      number: "15",
      label: "Areas of medicine",
      description:
        "From family medicine to cardiology and laboratory diagnostics.",
    },
    {
      number: "95",
      label: "Satisfied patients",
      description: "According to internal surveys over the past year.",
    },
    {
      number: "98",
      label: "Diagnostic accuracy",
      description: "Thanks to modern equipment and experienced specialists.",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-[500px] mx-auto lg:mx-0">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A5470] to-[#01BAEF]">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={Image1}
                  alt="Team of medical professionals"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-3">
              Why choose us
            </h2>
            <p className="text-black text-sm mb-10 font-bold uppercase tracking-wide">
              PROVIDED BY: Licensed medical experts
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="mb-3">
                    <span className="text-5xl md:text-5xl font-semibold text-[#0B4F6C]">
                      {stat.number}
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-[#01BAEF]">
                      +
                    </span>
                  </div>
                  <h3 className="text-black font-bold text-lg mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
