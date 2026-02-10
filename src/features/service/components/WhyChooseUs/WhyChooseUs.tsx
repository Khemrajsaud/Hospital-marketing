import WhyChooseUsClient from "./WhyChooseUsClient";

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

const WhyChooseUs = () => {
  return (
    <div className="min-h-4xl bg-[#F8FAFC] py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#0B4F6C]">
          Why Choose <span className="text-[#01BAEF]">Our Hospital?</span>
        </h1>

        <WhyChooseUsClient features={features} />
      </div>
    </div>
  );
};

export default WhyChooseUs;