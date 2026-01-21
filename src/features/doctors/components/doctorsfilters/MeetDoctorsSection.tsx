import React from "react";
import { Search } from "lucide-react";
import { AutocompleteInput } from "./AutocompleteInput";

const departments = [
  "Dentist",
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Oncology",
  "Gastroenterology",
  "Psychiatry",
  "Ophthalmology",
  "ENT (Ear, Nose & Throat)",
];

const locations = [
  "Kalagaun, Karnali Provincial",
  "Kathmandu, Bagmati Province",
  "Pokhara, Gandaki Province",
  "Biratnagar, Province No. 1",
  "Bharatpur, Bagmati Province",
  "Lalitpur, Bagmati Province",
  "Dharan, Province No. 1",
  "Butwal, Lumbini Province",
];

const searchOptions = [
  "Cavaty / Tooth pain",
  "General Checkup",
  "Diabetes Consultation",
  "Blood Pressure Monitoring",
  "Heart Disease",
  "Skin Allergy Treatment",
  "Pediatric Care",
  "Mental Health Counseling",
  "Physical Therapy",
  "X-Ray & Imaging",
  "Blood Test",
  "COVID-19 Testing",
  "Vaccination",
  "Dental Checkup",
  "Eye Examination",
  "Pregnancy Care",
];

const MeetDoctorsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="text-[#0B4F6C] text-lg md:text-xl font-semibold mb-3">
            Meet Expert Doctors For Better Care
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0B4F6C]">Let's Meet With </span>
            <span className="text-[#01BAEF]">Expert Doctors</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl">
            Connect with experienced doctors who are dedicated to delivering
            reliable care and precise guidance.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
            <div className="md:col-span-4">
              <AutocompleteInput
                label="Search"
                placeholder="Condition, doctor, practice..."
                options={searchOptions}
              />
            </div>

            <div className="md:col-span-3">
              <AutocompleteInput
                label="Department"
                placeholder="Select Department"
                options={departments}
              />
            </div>

            <div className="md:col-span-3">
              <AutocompleteInput
                label="Location"
                placeholder="Enter location"
                options={locations}
                defaultValue="Kalagaun, Karnali Provincial"
              />
            </div>

            <div className="md:col-span-2">
              <button className="w-full bg-[#01BAEF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0195C4] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <Search className="w-5 h-5" />
                Find Care
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDoctorsSection;
