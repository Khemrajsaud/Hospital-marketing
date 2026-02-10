'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Video, Stethoscope, FileText, Pill, Activity, Heart } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  iconName: 'video' | 'stethoscope' | 'fileText' | 'pill' | 'activity' | 'heart';
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

const iconMap = {
  video: Video,
  stethoscope: Stethoscope,
  fileText: FileText,
  pill: Pill,
  activity: Activity,
  heart: Heart,
};

export const ServiceCard = ({ number, iconName, title, description, features, buttonText }: ServiceCardProps) => {
  const Icon = iconMap[iconName];
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#01BAEF]/30 hover:ring-2 hover:ring-[#01BAEF]/40 hover:ring-offset-2 hover:ring-offset-white relative">
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-[#01BAEF] flex items-center justify-center">
          <Icon className="w-8 h-8 text-[#01BAEF]" />
        </div>
        <span className="text-5xl font-bold text-gray-50 opacity-20">{number}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed font-semibold">
        {description}
      </p>

      <div className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#01BAEF] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#0B4F6C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#094361] transition-colors flex items-center justify-center gap-2 group">
        {buttonText}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};