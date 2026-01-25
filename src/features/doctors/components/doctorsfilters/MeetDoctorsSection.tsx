import MeetDoctorsSectionClient from "./MeetDoctorsSectionClient";

const MeetDoctorsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <MeetDoctorsSectionClient />
      </div>
    </section>
  );
};

export default MeetDoctorsSection;