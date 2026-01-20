import React from "react";
import {
  Stethoscope,
  Brain,
  Baby,
  Eye,
  PillBottle,
  Scissors,
} from "lucide-react";

interface SpecialistCardProps {
  specialist: {
    id: number;
    specialty: string;
    icon: string;
    name: string;
    description: string;
    experience: string;
  };
}

const iconMap = {
  stethoscope: Stethoscope,
  brain: Brain,
  baby: Baby,
  eye: Eye,
  tooth: PillBottle,
  surgery: Scissors,
};

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  const IconComponent =
    iconMap[specialist.icon as keyof typeof iconMap] || Stethoscope;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#01BAEF]/30 hover:ring-2 hover:ring-[#01BAEF]/40 hover:ring-offset-2 hover:ring-offset-white relative">
      {/* Large Background Number */}
      <span className="absolute top-6 right-6 text-gray-100 text-6xl font-bold leading-none">
        0{specialist.id}
      </span>

      {/* Icon */}
      <div className="relative z-10 mb-4">
        <div className="w-16 h-16 rounded-full border-2 border-[#01BAEF] flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-[#01BAEF]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-[#01BAEF] font-semibold text-base mb-2">
          {specialist.specialty}
        </h4>

        <h3 className="text-[#0B4F6C] font-bold text-xl mb-3">
          {specialist.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {specialist.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <button className="text-[#01BAEF] font-semibold text-sm hover:text-[#0B4F6C] transition-colors flex items-center gap-1">
            Book appointment →
          </button>
          <span className="text-gray-500 text-sm">{specialist.experience}</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;