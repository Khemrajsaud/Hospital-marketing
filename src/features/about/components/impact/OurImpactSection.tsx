import React from "react";
import { Users, Stethoscope, Activity, Star, LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    number: "10000+",
    label: "Happy patients",
  },
  {
    icon: Stethoscope,
    number: "500+",
    label: "Expert Doctors",
  },
  {
    icon: Activity,
    number: "50000+",
    label: "Consultations",
  },
  {
    icon: Star,
    number: "98%",
    label: "Satisfaction Rate",
  },
];

const OurImpactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B7A9F] via-[#0B6B8F] to-[#0B5F7F] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Real results from people who trust us with their healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>

                <div className="text-white/90 text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;