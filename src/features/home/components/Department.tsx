import React from "react";
import Image from "next/image";

import Kidney from "../../../../public/kidney.png";
import Eye from "../../../../public/eye.png";
import Lung from "../../../../public/lung.png";
import Tooth from "../../../../public/tooth.png";
import Bone from "../../../../public/bone.png";

const departments = [
  {
    name: "Nephrology",
    icon: Kidney,
    alt: "Kidney illustration",
    iconWidth: 140,
    iconHeight: 140,
  },
  {
    name: "Cardiology",
    icon: Eye,
    alt: "Eye",
    iconWidth: 100,
    iconHeight: 100,
  },
  {
    name: "Pulmonology",
    icon: Lung,
    alt: "Lungs illustration",
    iconWidth: 130,
    iconHeight: 130,
  },
  {
    name: "Dentistry",
    icon: Tooth,
    alt: "Tooth illustration",
    iconWidth: 100,
    iconHeight: 110,
  },
  {
    name: "Orthopedics",
    icon: Bone,
    alt: "Bone illustration",
    iconWidth: 100,
    iconHeight: 100,
  },
] as const;

const Department: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#64748B] text-base md:text-lg uppercase tracking-wider mb-3 font-medium">
          Our Department
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Department <span className="text-[#01BAEF]">Category</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-12 md:mb-16 max-w-3xl mx-auto">
          Browse by department for tailored services and expert solutions
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {departments.map((dept) => (
            <div key={dept.name} className="flex flex-col items-center">
              <div className="relative w-[200px] h-[200px] rounded-2xl bg-white border border-[#C6C6C6] hover:border-[#01BAEF] flex items-center justify-center p-8">
                <div
                  className="w-28 h-28 rounded-full bg-cyan-50 flex items-center justify-center overflow-hidden z-10"
                  style={{ border: "4px dashed #C2DBE7" }}
                >
                  <Image
                    src={dept.icon}
                    alt={`${dept.name} - ${dept.alt}`}
                    width={dept.iconWidth}
                    height={dept.iconHeight}
                    className="object-contain drop-shadow-sm absolute"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;