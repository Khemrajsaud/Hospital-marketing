import React from "react";
import Image, { StaticImageData } from "next/image";
import type { ComponentType } from "react";

interface DepartmentCardProps {
  department: {
    name: string;
    icon: StaticImageData | ComponentType<{ className?: string }>;
    alt: string;
    iconWidth: number;
    iconHeight: number;
  };
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const Icon = department.icon;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[200px] h-[200px] rounded-2xl bg-white border border-[#C6C6C6] hover:border-[#01BAEF] flex items-center justify-center p-8 transition-colors cursor-pointer">
        <div
          className="w-28 h-28 rounded-full bg-cyan-50 flex items-center justify-center overflow-hidden z-10"
          style={{ border: "4px dashed #C2DBE7" }}
        >
          {typeof Icon === "object" && "src" in Icon ? (
            <Image
              src={Icon}
              alt={`${department.name} - ${department.alt}`}
              width={department.iconWidth}
              height={department.iconHeight}
              className="object-contain drop-shadow-sm"
              quality={90}
            />
          ) : (
            <Icon className="w-20 h-20 text-cyan-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;