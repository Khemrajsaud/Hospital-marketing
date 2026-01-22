import React from "react";
import Image, { StaticImageData } from "next/image";
import type { ComponentType } from "react";

interface SpecialtiesCardProps {
  specialty: {
    name: string;
    icon: StaticImageData | ComponentType<{ className?: string }>;
    alt: string;
    iconWidth: number;
    iconHeight: number;
  };
}

const SpecialtiesCard: React.FC<SpecialtiesCardProps> = ({ specialty }) => {
  const Icon = specialty.icon;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[200px] h-[200px] rounded-2xl bg-white border border-[#C6C6C6] hover:border-[#01BAEF] flex flex-col items-center justify-center p-8 transition-all duration-300 cursor-pointer hover:shadow-lg gap-4">
        <div
          className="w-24 h-28 rounded-full bg-cyan-50 flex items-center justify-center overflow-hidden z-10"
          style={{ border: "4px dashed #C2DBE7" }}
        >
          {typeof Icon === "object" && "src" in Icon ? (
            <Image
              src={Icon}
              alt={`${specialty.name} - ${specialty.alt}`}
              width={specialty.iconWidth}
              height={specialty.iconHeight}
              className="object-contain drop-shadow-sm"
              quality={90}
            />
          ) : (
            <Icon className="w-20 h-20 text-cyan-600" />
          )}
        </div>
        <h3 className="text-gray-900 text-base font-semibold text-center">
          {specialty.name}
        </h3>
      </div>
    </div>
  );
};

export default SpecialtiesCard;