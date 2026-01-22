import React from "react";
import DoctorsSearchForm from "./DoctorsSearchForm";

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

        <DoctorsSearchForm />
      </div>
    </section>
  );
};

export default MeetDoctorsSection;