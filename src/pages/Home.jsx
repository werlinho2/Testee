import React from 'react';
import HeroSequence from '../components/HeroSequence';
import ServicesSection from '../components/ServicesSection';
import ResultsSection from '../components/ResultsSection';
import DoctorSection from '../components/DoctorSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClinicSection from '../components/ClinicSection';
import LocationSection from '../components/LocationSection';

const Home = () => {
  return (
    <>
      <HeroSequence />
      
      {/* Spacer that defines how long the scrollytelling lasts before content covers it */}
      <div className="scroll-spacer" style={{ height: '400vh' }}></div>

      <div className="content-overlay">
        <ServicesSection />
        <ResultsSection />
        <DoctorSection />
        <TestimonialsSection />
        <ClinicSection />
        <LocationSection />
      </div>
    </>
  );
};

export default Home;
