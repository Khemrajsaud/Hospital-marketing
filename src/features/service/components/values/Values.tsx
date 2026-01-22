import React from 'react';
import { Heart, Shield, Zap, Users } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, dignity, and respect. Your well being is our highest priority, and we're committed to providing care that feels personal and supportive."
    },
    {
      icon: Shield,
      title: "Trust & Secure",
      description: "Your health information is protected with bank-level encryption and HIPAA compliance. We maintain the highest standards of privacy and data security."
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description: "We leverage cutting-edge technology and evidence-based medicine to deliver the most effective, efficient care possible. Continuous improvement drives everything we do."
    },
    {
      icon: Users,
      title: "Compassionate Care",
      description: "Quality healthcare should be available to everyone, everywhere. We break down barriers by bringing expert medical care directly to you, wherever you need it."
    }
  ];

  return (
    <div className="min-h-5xl bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0B4F6C] text-md font-bold mb-4 tracking-wide">
            What We Value
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B4F6C] mb-6">
            Our <span className="text-[#01BAEF]">Values</span>
          </h1>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            These core principles guide every decision we make and every interaction we have
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#01BAEF] flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B4F6C] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;