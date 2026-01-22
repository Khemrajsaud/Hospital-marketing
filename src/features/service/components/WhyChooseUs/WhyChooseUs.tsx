import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      stat: "24/7",
      title: "Emergency & Care Access"
    },
    {
      stat: "100%",
      title: "Data Privacy & Security"
    },
    {
      stat: "4.9/5",
      title: "Patient Satisfaction"
    }
  ];

  return (
    <div className="min-h-4xl bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#0B4F6C]">
          Why Choose <span className="text-[#01BAEF]">Our Hospital?</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-12 text-center shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#01BAEF]/30 hover:ring-2 hover:ring-[#01BAEF]/40 hover:ring-offset-2 hover:ring-offset-white relative"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#01BAEF] mb-4">
                {feature.stat}
              </div>
              <h3 className="text-xl font-semibold text-[#0B4F6C]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;