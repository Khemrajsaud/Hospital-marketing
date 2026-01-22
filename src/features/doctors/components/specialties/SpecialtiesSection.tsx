import React from "react";
import SectionHeader from "@/src/components/shared/SectionHeader";
import Kidney from "../../../../../public/kidney.png";
import Eye from "../../../../../public/eye.png";
import Lung from "../../../../../public/lung.png";
import Tooth from "../../../../../public/tooth.png";
import Bone from "../../../../../public/bone.png";
import SpecialtiesCard from "./SpecialtiesCard";

const specialtiesData = [
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
    alt: "Eye illustration",
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

const SpecialtiesSection: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          subtitle="Our Specialties"
          title="Top-searched"
          highlightedTitle="Specialties"
          description="Browse by department for tailored services and expert solutions"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {specialtiesData.map((specialty) => (
            <SpecialtiesCard key={specialty.name} specialty={specialty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesSection;