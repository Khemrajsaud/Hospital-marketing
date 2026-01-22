import React from 'react'
import Health from '@/src/features/service/components/health/Health'
import Values from '@/src/features/service/components/values/Values'
import WhyChooseUs from '@/src/features/service/components/WhyChooseUs/WhyChooseUs'
import Offer from '@/src/features/service/components/offer/Offer'
import FAQ from '@/src/features/service/components/question/FAQ'

const page = () => {
  return (
    <div>
      <Health/>
      <Values/>
      <WhyChooseUs/>
      <Offer/>
      <FAQ/>
    </div>
  )
}

export default page
