import React from "react";
import { Stethoscope, Activity, Globe, Sparkles, LucideIcon } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  align: "left" | "right";
}

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Founded by healthcare professionals who envisioned accessible care for everyone, everywhere.",
    icon: Stethoscope,
    align: "right",
  },
  {
    year: "2019",
    title: "Platform Launch",
    description:
      "Launched our telemedicine platform, connecting patients with doctors during a critical time.",
    icon: Activity,
    align: "left",
  },
  {
    year: "2021",
    title: "National Expansion",
    description:
      "Expanded to 10 states with 200+ board-certified physicians and 5,000+ patients served.",
    icon: Globe,
    align: "right",
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description:
      "Reached 10,000+ patients and introduced AI-assisted diagnostics and 24/7 care access.",
    icon: Sparkles,
    align: "left",
  },
];

const OurJourneyTimeline = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left mb-16 md:mb-20">
          <span className="text-[#0B4F6C]">Our </span>
          <span className="text-[#01BAEF]">Journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#B8E6F0] -translate-x-1/2 hidden md:block" />

          <div className="space-y-14 md:space-y-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isRight = milestone.align === "right";

              return (
                <div key={index} className="relative">
                  <div className="flex justify-center md:justify-start md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#01BAEF] rounded-full flex items-center justify-center shadow-lg ring-8 ring-white">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div
                    className={`flex flex-col md:flex-row items-center md:items-start ${
                      isRight ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/11 ${
                        isRight
                          ? "md:ml-auto md:pl-8 lg:pl-12"
                          : "md:mr-auto md:pr-8 lg:pr-12"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-3 md:p-5 shadow-lg border-t-4 md:border-t-0 ${
                          isRight
                            ? "md:border-l-4 border-l-[#01BAEF]"
                            : "md:border-r-4 border-r-[#01BAEF]"
                        } transition-all duration-300 hover:shadow-[0_0_20px_#01BAEF80,0_0_40px_#01BAEF40]`}
                      >
                        <p className="text-[#01BAEF] font-bold text-lg md:text-xl">
                          {milestone.year}
                        </p>
                        <h3 className="text-[#0B4F6C] font-bold text-lg md:text-xl">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base font-semibold">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneyTimeline;