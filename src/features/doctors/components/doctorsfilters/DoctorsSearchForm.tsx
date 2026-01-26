"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { AutocompleteInput } from "./AutocompleteInput";
import DoctorsResults from "./DoctorsResults";
import doctorsData from '@/src/components/doctorsData.json';

const DoctorsSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("Kalagaun, Karnali Provincial");

  const showResults = searchQuery !== "" || department !== "";

  const handleFindCare = () => {
  };

  const handleReset = () => {
    setSearchQuery("");
    setDepartment("");
    setLocation("Kalagaun, Karnali Provincial");
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="md:col-span-4">
            <AutocompleteInput
              label="Search"
              placeholder="Condition, doctor, practice..."
              options={[...doctorsData.searchOptions, ...doctorsData.departments]}
              defaultValue={searchQuery}
              onValueChange={setSearchQuery}
            />
          </div>

          <div className="md:col-span-3">
            <AutocompleteInput
              label="Department"
              placeholder="Select Department"
              options={doctorsData.departments}
              defaultValue={department}
              onValueChange={setDepartment}
            />
          </div>

          <div className="md:col-span-3">
            <AutocompleteInput
              label="Location"
              placeholder="Enter location"
              options={doctorsData.locations}
              defaultValue={location}
              onValueChange={setLocation}
            />
          </div>

          <div className="md:col-span-2">
            <button
              onClick={handleFindCare}
              className="w-full bg-[#01BAEF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0195C4] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Find Care
            </button>
          </div>
        </div>
      </div>

      {showResults && (
        <DoctorsResults
          searchQuery={searchQuery}
          department={department}
          location={location}
          onReset={handleReset}
          onClearSearch={() => setSearchQuery("")}
          onClearDepartment={() => setDepartment("")}
        />
      )}
    </>
  );
};

export default DoctorsSearchForm;