import React from 'react'
import MeetDoctorsSection from '@/src/features/doctors/components/doctorsfilters/MeetDoctorsSection'
import SpecialtiesSection from '@/src/features/doctors/components/specialties/SpecialtiesSection'
import DoctorFeaturesSection from '@/src/features/doctors/components/doctorsfeatures/DoctorFeaturesSection'

const page = () => {
  return (
    <div>
      <MeetDoctorsSection/> 
      <SpecialtiesSection/> 
      <DoctorFeaturesSection/>
    </div>
  )
}

export default page
