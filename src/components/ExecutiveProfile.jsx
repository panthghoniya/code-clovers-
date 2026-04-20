import { useParams, Navigate } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import CompanyIntro from './CompanyIntro';
import ServicesGrid from './ServicesGrid';
import PortfolioSlider from './PortfolioSlider';
import Testimonials from './Testimonials';
import ContactBar from './ContactBar';

// Import Data
import executivesData from '../data/executives.json';
import servicesData from '../data/services.json';
import portfolioData from '../data/portfolio.json';
import testimonialsData from '../data/testimonials.json';
import companyData from '../data/company.json';

const ExecutiveProfile = () => {
  const { name } = useParams();
  
  // Normalize the name from the URL to lowercase for lookup
  const normalizedName = name?.toLowerCase();
  const executive = executivesData[normalizedName];

  // If the executive doesn't exist in our JSON, redirect or show 404
  if (!executive) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground p-4">
        <div className="premium-card p-8 text-center max-w-md w-full">
          <h1 className="text-4xl font-heading font-bold mb-4">404</h1>
          <p className="text-muted-foreground mb-6">Profile not found. Please check the URL.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Premium Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-clover-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-clover-accent/5 blur-[100px]" />
      </div>

      {/* Main Content - Split Layout for Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 pt-4 pb-32 md:pt-12 lg:flex lg:gap-16 lg:items-start overflow-x-hidden">
        
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
    </>
  );
};

export default ExecutiveProfile;
