import React from "react";
import { StatCard } from "./StatCard";

const stats = [
  {
    iconName: "users" as const,
    number: "10000+",
    label: "Happy patients",
  },
  {
    iconName: "stethoscope" as const,
    number: "500+",
    label: "Expert Doctors",
  },
  {
    iconName: "activity" as const,
    number: "50000+",
    label: "Consultations",
  },
  {
    iconName: "star" as const,
    number: "98%",
    label: "Satisfaction Rate",
  },
];

const OurImpactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B7A9F] via-[#0B6B8F] to-[#0B5F7F] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Real results from people who trust us with their healthcare
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              iconName={stat.iconName}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;