import React from 'react'
import AboutUsSection from '@/src/features/about/components/about/AboutUsSection'
import AdvancedCareSection from '@/src/features/about/components/advancecare/AdvancedCareSection'
import OurMissionSection from '@/src/features/about/components/mission/OurMissionSection'
import WhoWeAreSection from '@/src/features/about/components/whoarewe/WhoWeAreSection'
import OurJourneyTimeline from '@/src/features/about/components/journey/OurJourneyTimeline'
import OurImpactSection from '@/src/features/about/components/impact/OurImpactSection'

const page = () => {
  return (
    <div>
      <AboutUsSection/>
      <WhoWeAreSection/>
      <AdvancedCareSection/>
      <OurMissionSection/>
      <OurJourneyTimeline/>
      <OurImpactSection/>
    </div>
  )
}

export default page
