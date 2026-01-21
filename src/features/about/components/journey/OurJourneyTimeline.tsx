import React from "react";
import { TimelineItem } from "./TimelineItem";

const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Founded by healthcare professionals who envisioned accessible care for everyone, everywhere.",
    iconName: "stethoscope" as const,
    align: "right" as const,
  },
  {
    year: "2019",
    title: "Platform Launch",
    description:
      "Launched our telemedicine platform, connecting patients with doctors during a critical time.",
    iconName: "activity" as const,
    align: "left" as const,
  },
  {
    year: "2021",
    title: "National Expansion",
    description:
      "Expanded to 10 states with 200+ board-certified physicians and 5,000+ patients served.",
    iconName: "globe" as const,
    align: "right" as const,
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description:
      "Reached 10,000+ patients and introduced AI-assisted diagnostics and 24/7 care access.",
    iconName: "sparkles" as const,
    align: "left" as const,
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
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                iconName={milestone.iconName}
                align={milestone.align}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneyTimeline;