import React from "react";
import { Clock, CheckCircle, Lock } from "lucide-react";

const BookingInfo: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "Availability",
      description: "See live slots for all departments",
    },
    {
      icon: CheckCircle,
      title: "Instant confirmation",
      description: "Receive email & SMS alerts immediately",
    },
    {
      icon: Lock,
      title: "Secure data",
      description: "HIPAA compliant patient information",
    },
  ];

  return (
    <div>
      <p className="text-[#0B4F6C] font-semibold text-lg mb-3">
        Book Appointment
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-4">
        Schedule Your Doctor Visit{" "}
        <span className="text-[#01BAEF]">Online</span>
      </h2>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Experience hassle-free healthcare scheduling with our advanced
        management system. Fast, secure, and reliable.
      </p>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-md transition-all duration-300 hover:shadow-[0_10px_30px_-8px_#01BAEF] hover:shadow-[#01BAEF]/40">
            <div className="w-12 h-12 rounded-full bg-[#01BAEF]/10 flex items-center justify-center flex-shrink-0">
              <feature.icon
                className="w-6 h-6 text-[#01BAEF]"
                strokeWidth={2}
              />
            </div>
            <div>
              <h3 className="text-[#0B4F6C] font-semibold text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
