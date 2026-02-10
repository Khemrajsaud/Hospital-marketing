import SectionHeader from "@/src/components/shared/SectionHeader";
import SpecialtiesSectionClient from "./SpecialtiesSectionClient";

const SpecialtiesSection = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          subtitle="Our Specialties"
          title="Top-searched"
          highlightedTitle="Specialties"
          description="Browse by department for tailored services and expert solutions"
        />

        <SpecialtiesSectionClient />
      </div>
    </div>
  );
};

export default SpecialtiesSection;