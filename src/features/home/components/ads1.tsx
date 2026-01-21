import React from "react";
import CTAButton from "@/src/components/shared/CTAButton";

const Ads1: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0A5470] via-[#096686] to-[#03ABDD] px-8 py-12 md:px-12 md:py-16 text-center relative" style={{ fontFamily: 'var(--font-quicksand), system-ui, sans-serif' }}>
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
          Ready to Take Control of Your Health?
        </h3>

        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow">
          Join thousands of patients who trust us for their healthcare needs.
          Book your first appointment today and experience the difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <CTAButton
            href="#book-appointment"
            variant="primary"
            text="Get Started Now"
          />
          <CTAButton
            href="/contact"
            variant="secondary"
            text="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default Ads1;