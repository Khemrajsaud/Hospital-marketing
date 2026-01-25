import React from "react";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";

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
                  src="/doctors1.png"
                  alt="Team of medical professionals"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <AnimatedContent stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;