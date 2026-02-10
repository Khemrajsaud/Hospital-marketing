import React from "react";
import AnimatedImpactStats from "./AnimatedImpactStats";

interface Stat {
  iconName: string;     
  number: string;
  label: string;
}

const stats: Stat[] = [
  {
    iconName: "Users",
    number: "10000+",
    label: "Happy patients",
  },
  {
    iconName: "Stethoscope",
    number: "500+",
    label: "Expert Doctors",
  },
  {
    iconName: "Activity",
    number: "50000+",
    label: "Consultations",
  },
  {
    iconName: "Star",
    number: "98%",
    label: "Satisfaction Rate",
  },
];

const OurImpactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B7A9F] via-[#0B6B8F] to-[#0B5F7F] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <AnimatedImpactStats stats={stats} />
      </div>
    </section>
  );
};

export default OurImpactSection;