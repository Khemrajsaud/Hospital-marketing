import ValuesClient from "./ValuesClient";

const Values = () => {
  return (
    <div className="min-h-5xl bg-white py-16 px-4 overflow-hidden">
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

        <ValuesClient />
      </div>
    </div>
  );
};

export default Values;