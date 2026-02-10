import DoctorFeaturesSectionClient from "./DoctorFeaturesSectionClient";

const features = [
  {
    id: 1,
    title: "Get the doctor that gets you",
    buttonText: "See Specialties",
    image: "/let1.png",
    alt: "Doctor with patient illustration"
  },
  {
    id: 2,
    title: "Read reviews from users",
    buttonText: "See Reviews",
    image: "/let2.png",
    alt: "Doctor reviews illustration"
  },
  {
    id: 3,
    title: "Book an appointment today, online",
    buttonText: "Book Appointment",
    image: "/let3.png",
    alt: "Book appointment illustration"
  }
];

const DoctorFeaturesSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#0B4F6C] mb-12">
          Let's get you doctor who gets you
        </h2>

        <DoctorFeaturesSectionClient features={features} />
      </div>
    </section>
  );
};

export default DoctorFeaturesSection;