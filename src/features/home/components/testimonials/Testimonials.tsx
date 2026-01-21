import SectionHeader from "@/src/components/shared/SectionHeader";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const testimonials = [
  {
    id: 1,
    name: "Ajina Kayastha",
    location: "Bhaktapur, Nepal",
    image: "/testo1.jpg",
    rating: 5,
    text: "Patient handling is now smooth and fully digital. Appointments, billing, pharmacy, and reports run perfectly together. Our waiting time has reduced drastically and the overall experience feels very professional.",
  },
  {
    id: 2,
    name: "Dr. Ramesh Adhikari",
    location: "Bhaktapur, Nepal",
    image: "/testo2.jpg",
    rating: 5,
    text: "Online appointment booking has made OPD flow seamless. Patients can book in advance and avoid long queues.",
  },
  {
    id: 3,
    name: "Rajita Shahi",
    location: "Kirtipur, Nepal",
    image: "/testo3.jpg",
    rating: 5,
    text: "Patient handling is now smooth and fully digital. Appointments, billing, pharmacy, and reports run perfectly together. Our waiting time has reduced drastically and the overall experience feels very professional.",
  },
  {
    id: 4,
    name: "Anita Shrestha",
    location: "Bauddha, Nepal",
    image: "/testo4.jpg",
    rating: 5,
    text: "Everything is simple to use and staff adapted very quickly. Records, billing, and reporting are now organized and easy to manage. Support is always responsive.",
  },
  {
    id: 5,
    name: "Bikash Thapa",
    location: "Bauddha, Nepal",
    image: "/testo5.jpg",
    rating: 5,
    text: "Billing, lab reports, and inventory tracking feel effortless now. Real-time data helps us make faster decisions every day.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Testimonial"
          title="What Our"
          highlightedTitle="Patients Say"
          subtitleColor="text-[#0B4F6C]"
        />

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;