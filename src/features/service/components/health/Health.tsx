import HealthClient from "./HealthClient";

const services = [
  {
    number: "01",
    iconName: 'video' as const,
    title: "Virtual Doctor Consultations",
    description: "Connect with licensed doctors from anywhere via secure video calls — 24/7 availability for non-emergency care.",
    features: [
      "Same-day appointments available",
      "Prescriptions sent digitally",
      "Follow-ups at no extra cost"
    ],
    buttonText: "Book a Consultation"
  },
  {
    number: "02",
    iconName: 'stethoscope' as const,
    title: "AI-Powered Symptom Checker",
    description: "Get instant insights on your symptoms with our smart AI tool, backed by medical guidelines — then connect to a doctor if needed.",
    features: [
      "Fast & private assessment",
      "Personalized recommendations",
      "Reduces unnecessary visits"
    ],
    buttonText: "Check Symptoms"
  },
  {
    number: "03",
    iconName: 'fileText' as const,
    title: "Digital Health Records",
    description: "Securely store, access, and share your medical history, lab results, and prescriptions — all in one place.",
    features: [
      "HIPAA-compliant encryption",
      "Easy sharing with doctors",
      "Lifetime access & backups"
    ],
    buttonText: "View Records"
  },
  {
    number: "04",
    iconName: 'pill' as const,
    title: "Medication & Refills",
    description: "Never miss a dose — get smart reminders, track adherence, and request refills directly through the app.",
    features: [
      "Custom schedules & alerts",
      "Pharmacy integration",
      "Adherence reports for doctors"
    ],
    buttonText: "Set Reminders"
  },
  {
    number: "05",
    iconName: 'activity' as const,
    title: "Wellness & Fitness Tracking",
    description: "Monitor steps, heart rate, and more — get personalized wellness plans to improve your daily health.",
    features: [
      "Wearable device sync",
      "Goal setting & progress charts",
      "Personalized health insights"
    ],
    buttonText: "Start Tracking"
  },
  {
    number: "06",
    iconName: 'heart' as const,
    title: "Chronic Care Management",
    description: "Specialized support for diabetes, hypertension, asthma & more — regular check-ins, education, and early alerts.",
    features: [
      "Tailored care plans",
      "Remote monitoring tools",
      "Dedicated care coordinator"
    ],
    buttonText: "Learn More"
  }
];

const Health = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#01BAEF] rounded-full"></div>
            <div className="w-3 h-3 bg-[#01BAEF] rounded-full"></div>
            <div className="w-3 h-3 bg-[#01BAEF] rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-4">
            Our <span className="text-[#01BAEF]">Health Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-semibold">
            Comprehensive, accessible care at your fingertips — from virtual doctor visits to personalized
            wellness tools. Designed for patients in Kathmandu, Nepal and beyond.
          </p>
        </div>

        <HealthClient services={services} />
      </div>
    </div>
  );
};

export default Health;