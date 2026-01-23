import React from 'react';
import { Phone, Mail, MapPin, Users } from 'lucide-react';
import ContactForm from './ContactForm';
import VisitHospitalCard from './VisitHospitalCard';

interface ContactCard {
  icon: any;
  title: string;
  subtitle: string;
  info: string;
  link?: boolean;
  color: string;
}

const ContactSection = () => {
  const contactCards: ContactCard[] = [
    {
      icon: Phone,
      title: 'Phone',
      subtitle: '24/7 Availability',
      info: '+977 - 9812345678',
      color: 'text-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Quick Reply',
      info: 'support@health.com',
      color: 'text-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Nepal',
      info: 'Kalagaun, Karnali Provincial',
      color: 'text-cyan-500'
    },
    {
      icon: Users,
      title: 'Support',
      subtitle: 'Always On',
      info: 'Explore',
      link: true,
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0B4F6C] text-md font-bold mb-2">Contact Us</p>
          <h1 className="text-5xl font-bold text-[#0B4F6C] mb-4">
            Get In <span className="text-[#01BAEF]">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-3xl font-semibold mx-auto">
            We're here for you — 24/7 support, quick answers, and compassionate help with your health questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#01BAEF]/30 hover:ring-2 hover:ring-[#01BAEF]/40 hover:ring-offset-2 hover:ring-offset-white relative"
              >
                <div className={`${card.color} mb-4`}>
                  <IconComponent className="w-8 h-8 text-[#01BAEF]" />
                </div>
                <h3 className="text-[#0B4F6C] font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-gray-600 font-semibold text-sm mb-3">{card.subtitle}</p>
                <p className="text-[#0B4F6C] font-bold text-md">
                  {card.link ? (
                    <span className="flex items-center gap-1 text-[#0B4F6C]">
                      {card.info} →
                    </span>
                  ) : (
                    card.info
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <VisitHospitalCard />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;