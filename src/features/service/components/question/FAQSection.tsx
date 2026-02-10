import FAQAccordionClient from './FAQAccordionClient';

const faqs = [
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is protected with industry-standard encryption and security measures. We follow strict privacy protocols to ensure your information remains confidential and secure.",
  },
  {
    question: "Do I need insurance?",
    answer:
      "We accept most major insurance plans. However, specific coverage may vary depending on your provider and plan. Please contact us with your insurance information to verify coverage.",
  },
  {
    question: "Can I consult for emergencies?",
    answer:
      "For life-threatening emergencies, please call 911 or visit your nearest emergency room immediately. Our virtual consultation service is designed for non-emergency medical concerns.",
  },
  {
    question: "How do virtual consultations work?",
    answer:
      "Virtual consultations are conducted via secure video calls. Simply book an appointment, and at your scheduled time, you'll connect with a healthcare provider through our platform from the comfort of your home.",
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-[50vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0B4F6C] text-md font-semibold mb-2">
            Few Questions
          </p>
          <h1 className="text-5xl font-bold text-[#0B4F6C]">
            Frequently Asked{" "}
            <span className="text-[#01BAEF]">Questions</span>
          </h1>
        </div>

        <FAQAccordionClient faqs={faqs} />
      </div>
    </div>
  );
}