"use client";

import React from "react";
import { Stethoscope, Activity, Globe, Sparkles } from "lucide-react";

interface TimelineIconProps {
  iconName: "stethoscope" | "activity" | "globe" | "sparkles";
}

const iconMap = {
  stethoscope: Stethoscope,
  activity: Activity,
  globe: Globe,
  sparkles: Sparkles,
};

export const TimelineIcon: React.FC<TimelineIconProps> = ({ iconName }) => {
  const Icon = iconMap[iconName];

  return (
    <div className="flex justify-center md:justify-start md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#01BAEF] rounded-full flex items-center justify-center shadow-lg ring-8 ring-white">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>
    </div>
  );
};