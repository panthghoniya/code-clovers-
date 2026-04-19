import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import CompanyIntro from './components/CompanyIntro';
import ServicesGrid from './components/ServicesGrid';
import PortfolioSlider from './components/PortfolioSlider';
import Testimonials from './components/Testimonials';
import ContactBar from './components/ContactBar';

// Import Data
import executivesData from './data/executives.json';
import companyData from './data/company.json';
import servicesData from './data/services.json';
import portfolioData from './data/portfolio.json';
import testimonialsData from './data/testimonials.json';

function App() {
  const executive = executivesData;

  return (
    <div className="min-h-screen relative selection:bg-clover-primary/30 selection:text-white bg-[#030303] text-text-primary">
      
      {/* Premium Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-clover-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-clover-accent/5 blur-[150px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[100px]" />
      </div>

      {/* Main Content - Split Layout for Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 md:pt-12 lg:flex lg:gap-16 lg:items-start">
        
        {/* Left Side: Sticky Profile Card & Details */}
        <div className="w-full lg:w-[420px] shrink-0 lg:sticky lg:top-12 flex flex-col gap-8">
          <ProfileHeader executive={executive} />
          <CompanyIntro company={companyData} />
        </div>

        {/* Right Side: Scrollable Content */}
        <div className="w-full lg:flex-1 min-w-0 mt-12 lg:mt-0 flex flex-col gap-12 lg:gap-20">
          <ServicesGrid services={servicesData} />
          <PortfolioSlider portfolio={portfolioData} />
          <Testimonials testimonials={testimonialsData} />
        </div>

      </div>

      <ContactBar contact={executive.contact} />
    </div>
  );
}

export default App;
