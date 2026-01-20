import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    location: string;
    image: string;
    rating: number;
    text: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[#0B4F6C] font-bold text-lg mb-1">
            {testimonial.name}
          </h3>
          <p className="text-gray-500 text-xs">{testimonial.location}</p>
        </div>
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ml-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
        {testimonial.text}
      </p>

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;