"use client";

import React from "react";
import { Users, Stethoscope, Activity, Star } from "lucide-react";

interface StatCardProps {
  iconName: "users" | "stethoscope" | "activity" | "star";
  number: string;
  label: string;
}

const iconMap = {
  users: Users,
  stethoscope: Stethoscope,
  activity: Activity,
  star: Star,
};

export const StatCard: React.FC<StatCardProps> = ({ iconName, number, label }) => {
  const Icon = iconMap[iconName];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Number */}
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}
      </div>

      {/* Label */}
      <div className="text-white/90 text-base md:text-lg font-medium">
        {label}
      </div>
    </div>
  );
};
