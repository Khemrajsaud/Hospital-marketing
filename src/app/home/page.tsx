import React from "react";
import Banner from "@/src/features/home/components/banner/Banner";
import Department from "@/src/features/home/components/department/Department";
import Ads1 from "@/src/features/home/components/ads1";
import Specialists from "@/src/features/home/components/specialists/Specialists";
import BookingSection from "@/src/features/home/components/booking/BookingSection";
import WhyChooseUs from "@/src/features/home/components/WhyChooseUs";
import Testimonials from "@/src/features/home/components/testimonials/Testimonials";
import NewsSection from "@/src/features/home/components/newsection/NewsSection";
import Footer from "@/src/components/footer/Footer";

const page = () => {
  return (
    <div>
      <Banner />
      <Department />
      <Ads1 />
      <Specialists />
      <BookingSection />
      <WhyChooseUs />
      <Testimonials />
      <NewsSection />
    </div>
  );
};

export default page;
