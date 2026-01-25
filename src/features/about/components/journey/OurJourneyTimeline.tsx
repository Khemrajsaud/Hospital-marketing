import React from "react";
import AnimatedJourneyTimeline from "./AnimatedJourneyTimeline";

interface Milestone {
  year: string;
  title: string;
  description: string;
  iconName: string;
  align: "left" | "right";
}

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Founded by healthcare professionals who envisioned accessible care for everyone, everywhere.",
    iconName: "Stethoscope",
    align: "right",
  },
  {
    year: "2019",
    title: "Platform Launch",
    description:
      "Launched our telemedicine platform, connecting patients with doctors during a critical time.",
    iconName: "Activity",
    align: "left",
  },
  {
    year: "2021",
    title: "National Expansion",
    description:
      "Expanded to 10 states with 200+ board-certified physicians and 5,000+ patients served.",
    iconName: "Globe2",
    align: "right",
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description:
      "Reached 10,000+ patients and introduced AI-assisted diagnostics and 24/7 care access.",
    iconName: "Sparkle",
    align: "left",
  },
];

const OurJourneyTimeline = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto">
        <AnimatedJourneyTimeline milestones={milestones} />
      </div>
    </section>
  );
};

export default OurJourneyTimeline;