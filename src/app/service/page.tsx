import React from 'react'
import Health from '@/src/features/service/components/health/Health'
import Values from '@/src/features/service/components/values/Values'
import WhyChooseUs from '@/src/features/service/components/WhyChooseUs/WhyChooseUs'
import Offer from '@/src/features/service/components/offer/Offer'
import FAQSection from '@/src/features/service/components/question/FAQSection'

const page = () => {
  return (
    <div>
      <Health/>
      <Values/>
      <WhyChooseUs/>
      <Offer/>
      <FAQSection/>
    </div>
  )
}

export default page
