import React from "react";
import BookingInfo from "./BookingInfo";
import BookingForm from "./BookingForm";

const BookingSection: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <BookingInfo />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingSection;