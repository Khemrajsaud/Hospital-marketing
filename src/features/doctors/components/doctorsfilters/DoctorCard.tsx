"use client";

import React from "react";
import Image from "next/image";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  image: string;
  conditions: string[];
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const handleBookAppointment = () => {
    console.log("Booking appointment for:", doctor.name);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-[#0A5470] text-sm font-semibold mb-1">{doctor.specialty}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex items-center gap-1">
          <span className="text-[#01BAEF]">🏥</span> {doctor.experience}
        </p>
        <button 
          onClick={handleBookAppointment}
          className="w-full bg-[#0A5470] hover:bg-[#096686] text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;