import React from "react";

import SpecialistCard from "./SpecialistCard";
import ExcellenceBanner from "./ExcellenceBanner";
import SectionHeader from "@/src/components/shared/SectionHeader";

const specialists = [
  {
    id: 1,
    specialty: "Cardiology",
    icon: "stethoscope",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified cardiologist with 10+ years in diagnosing and treating heart disorders, emphasizing preventive care.",
    experience: "10 years exp.",
  },
  {
    id: 2,
    specialty: "Neurology",
    icon: "brain",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified neurologist with 10+ years in diagnosing neurological disorders and patient care.",
    experience: "10 years exp.",
  },
  {
    id: 3,
    specialty: "Pediatrics",
    icon: "baby",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified pediatrician with 10+ years in diagnosing and treating children's health issues.",
    experience: "10 years exp.",
  },
  {
    id: 4,
    specialty: "Ophthalmology",
    icon: "eye",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified ophthalmologist with 10+ years of experience in evaluating and managing vision disorders.",
    experience: "10 years exp.",
  },
  {
    id: 5,
    specialty: "Dentist",
    icon: "tooth",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified dentist with 10+ years of experience in providing comprehensive dental care.",
    experience: "10 years exp.",
  },
  {
    id: 6,
    specialty: "Neurosurgeon",
    icon: "surgery",
    name: "Dr. Sakshyam Shrestha",
    description: "Board-certified neurosurgeon with 10+ years of experience in performing complex brain and spinal surgeries.",
    experience: "10 years exp.",
  },
];

const Specialists: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto">
        <SectionHeader
          subtitle="Expert Medical Care"
          title="Our"
          highlightedTitle="Specialists"
          description="Connect with experienced, board-certified doctors across major specialties — personalized care you can trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {specialists.slice(0, 4).map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.slice(4).map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
          <div className="lg:col-span-2">
            <ExcellenceBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;