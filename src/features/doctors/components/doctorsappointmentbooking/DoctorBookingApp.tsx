import React from 'react';
import doctorsData from '@/src/components/doctorsData.json';
import DoctorBookingClient from './DoctorBookingClient';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  image: string;
  conditions: string[];
}

interface DoctorsData {
  departments: string[];
  locations: string[];
  searchOptions: string[];
  doctors: Doctor[];
}

const DoctorBookingApp = () => {
  const data: DoctorsData = doctorsData as DoctorsData;

  return <DoctorBookingClient data={data} />;
};

export default DoctorBookingApp;