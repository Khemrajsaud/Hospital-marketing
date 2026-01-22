import React from 'react';
import { Stethoscope, Pill, HeartPulse, FlaskConical, Calendar } from 'lucide-react';

const Offer = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Virtual Consultations",
      description: "Connect with board-certified doctors via secure video or chat — anytime, from anywhere."
    },
    {
      icon: Pill,
      title: "Digital Prescriptions",
      description: "Receive e-prescriptions instantly sent to your pharmacy of choice for quick & contactless pickup."
    },
    {
      icon: HeartPulse,
      title: "Chronic Care",
      description: "Ongoing support for diabetes, hypertension, and other conditions with remote monitoring tools."
    },
    {
      icon: FlaskConical,
      title: "Lab & Test Results",
      description: "View results in real-time, track trends, and discuss directly with your care team."
    },
    {
      icon: Calendar,
      title: "Specialist Referrals",
      description: "Fast access to dermatology, pediatrics, nutrition, and other specialized virtual care."
    }
  ];

  return (
    <div className="min-h-5xl bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0B4F6C] text-sm font-semibold mb-3 tracking-wide">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-6">
            Our Comprehensive <span className="text-[#00B4D8]">Services</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            From instant virtual care to specialized support — everything you need for modern, convenient healthcare in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full border-3 border-[#00B4D8] flex items-center justify-center hover:bg-[#00B4D8] hover:border-[#00B4D8] transition-all duration-300 group">
                    <Icon className="w-10 h-10 text-[#01BAEF] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0B4F6C] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm font-semibold leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;