import OfferClient from "./OfferClient";

const Offer = () => {
  return (
    <div className="min-h-5xl bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0B4F6C] text-sm font-semibold mb-3 tracking-wide">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-6">
            Our Comprehensive <span className="text-[#00B4D8]">Services</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            From instant virtual care to specialized support — everything you need for modern, convenient healthcare in one place.
          </p>
        </div>

        <OfferClient />
      </div>
    </div>
  );
};

export default Offer;