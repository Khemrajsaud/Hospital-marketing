import ContactSectionClient from './ContactSectionClient';
import ContactForm from './ContactForm';
import VisitHospitalCard from './VisitHospitalCard';

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        <ContactSectionClient />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <ContactForm />
          <VisitHospitalCard />
        </div>
      </div>
    </div>
  );
}