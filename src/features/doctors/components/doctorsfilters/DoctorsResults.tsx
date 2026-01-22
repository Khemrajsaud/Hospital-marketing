"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import DoctorCard from "./DoctorCard";
import doctorsData from "./doctors-data.json";

interface DoctorsResultsProps {
  searchQuery: string;
  department: string;
  location: string;
  onReset: () => void;
  onClearSearch: () => void;
  onClearDepartment: () => void;
}

const DoctorsResults: React.FC<DoctorsResultsProps> = ({
  searchQuery,
  department,
  location,
  onReset,
  onClearSearch,
  onClearDepartment,
}) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData.doctors);

  useEffect(() => {
    let filtered = doctorsData.doctors;

    if (department) {
      filtered = filtered.filter(doc => doc.specialty === department);
    }

    if (location) {
      filtered = filtered.filter(doc => doc.location === location);
    }

    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.conditions.some(condition => 
          condition.toLowerCase().includes(searchQuery.toLowerCase())
        ) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [searchQuery, department, location]);

  return (
    <section className="mt-12">
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {searchQuery && (
              <div className="bg-[#01BAEF]/10 text-[#0A5470] px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                <span>Search: {searchQuery}</span>
                <button onClick={onClearSearch} className="hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {department && (
              <div className="bg-[#01BAEF]/10 text-[#0A5470] px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                <span>Department: {department}</span>
                <button onClick={onClearDepartment} className="hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {location && (
              <div className="bg-[#01BAEF]/10 text-[#0A5470] px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                <span>Location: {location}</span>
              </div>
            )}
          </div>
          <button
            onClick={onReset}
            className="bg-[#01BAEF] hover:bg-[#0195C4] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#0B4F6C]">
          Found {filteredDoctors.length} doctors
        </h3>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center shadow-md">
          <p className="text-gray-600 text-lg">
            No doctors found matching your criteria. Please try different filters.
          </p>
        </div>
      )}
    </section>
  );
};

export default DoctorsResults;