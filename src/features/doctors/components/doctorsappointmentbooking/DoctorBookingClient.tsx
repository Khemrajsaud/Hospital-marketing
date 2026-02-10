"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronLeft, Plus, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  image: string;
  conditions: string[];
}

interface DoctorsData {
  departments: string[];
  locations: string[];
  searchOptions: string[];
  doctors: Doctor[];
}

interface DoctorBookingClientProps {
  data: DoctorsData;
}

const DoctorBookingClient = ({ data }: DoctorBookingClientProps) => {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );
  const [showMoreSpecialties, setShowMoreSpecialties] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty],
    );
  };

  const toggleAvailability = (option: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  };

  const resetFilters = () => {
    setSelectedSpecialties([]);
    setSelectedAvailability([]);
    setSearchQuery("");
    setSelectedDepartment("");
  };

  const filteredDoctors = data.doctors.filter((doctor) => {
    if (
      selectedSpecialties.length > 0 &&
      !selectedSpecialties.includes(doctor.specialty)
    ) {
      return false;
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = doctor.name.toLowerCase().includes(query);
      const matchesSpecialty = doctor.specialty.toLowerCase().includes(query);
      const matchesConditions = doctor.conditions.some((c) =>
        c.toLowerCase().includes(query),
      );

      if (!matchesName && !matchesSpecialty && !matchesConditions) {
        return false;
      }
    }

    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/doctor">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors border"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
            </Link>
            <span className="text-sm font-semibold text-gray-600">
              Meet Specialties For Better Care
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Let's Meet With <span className="text-[#01BAEF]">Specialties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 font-semibold"
          >
            Connect with experienced doctors who are dedicated to delivering
            reliable care and precise guidance.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white border-b sticky top-0 z-10 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name, speciality, or conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#01BAEF] text-gray-700 cursor-pointer"
              >
                <option value="">Select Departments</option>
                {data.departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-lg p-6 sticky top-32 shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetFilters}
                  className="text-sm text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                >
                  Reset All
                </motion.button>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#01BAEF] flex items-center justify-center">
                    <Plus className="w-3 h-3 text-[#01BAEF]" />
                  </div>
                  <h3 className="font-bold text-gray-900">SPECIALTY</h3>
                </div>
                <div className="space-y-2">
                  <AnimatePresence>
                    {data.departments
                      .slice(
                        0,
                        showMoreSpecialties ? data.departments.length : 5,
                      )
                      .map((specialty, index) => (
                        <motion.label
                          key={specialty}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedSpecialties.includes(specialty)}
                            onChange={() => toggleSpecialty(specialty)}
                            className="w-4 h-4 text-[#01BAEF] rounded focus:ring-[#01BAEF] cursor-pointer"
                          />
                          <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                            {specialty}
                          </span>
                        </motion.label>
                      ))}
                  </AnimatePresence>
                </div>
                {data.departments.length > 5 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowMoreSpecialties(!showMoreSpecialties)}
                    className="flex items-center gap-1 mt-3 text-[#01BAEF] text-sm hover:text-cyan-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{showMoreSpecialties ? "See Less" : "See More"}</span>
                  </motion.button>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#01BAEF] flex items-center justify-center">
                    <Plus className="w-3 h-3 text-[#01BAEF]" />
                  </div>
                  <h3 className="font-bold text-gray-900">AVAILABILITY</h3>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes("today")}
                      onChange={() => toggleAvailability("today")}
                      className="w-4 h-4 text-[#01BAEF] rounded focus:ring-[#01BAEF] cursor-pointer"
                    />
                    <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                      Availability Today
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes("week")}
                      onChange={() => toggleAvailability("week")}
                      className="w-4 h-4 text-[#01BAEF] rounded focus:ring-[#01BAEF] cursor-pointer"
                    />
                    <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                      This Week
                    </span>
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={resetFilters}
                className="w-full bg-[#0B4F6C] text-white py-3 rounded-lg hover:bg-[#084158] transition-colors font-medium"
              >
                Apply Filter
              </motion.button>
            </div>
          </motion.div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              {filteredDoctors.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">
                    No doctors found matching your criteria.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetFilters}
                    className="mt-4 text-[#01BAEF] hover:text-cyan-700 font-medium"
                  >
                    Reset Filters
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 text-gray-600"
                  >
                    Showing {filteredDoctors.length} doctor
                    {filteredDoctors.length !== 1 ? "s" : ""}
                  </motion.div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredDoctors.map((doctor, index) => (
                      <motion.div
                        key={doctor.id}
                        variants={itemVariants}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3 },
                        }}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="h-48 overflow-hidden bg-gray-200 relative">
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-xs text-[#01BAEF] font-semibold uppercase tracking-wide">
                            {doctor.specialty}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                            {doctor.name}
                          </h3>

                          <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{doctor.experience}</span>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">
                              📍 {doctor.location}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {doctor.conditions
                                .slice(0, 2)
                                .map((condition, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded"
                                  >
                                    {condition}
                                  </span>
                                ))}
                              {doctor.conditions.length > 2 && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  +{doctor.conditions.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#0B4F6C] text-white py-2.5 rounded-lg hover:bg-[#084158] transition-colors font-medium"
                          >
                            Book Appointment
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBookingClient;