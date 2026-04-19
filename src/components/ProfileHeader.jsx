import { motion } from 'framer-motion';
import { BadgeCheck, Users, Briefcase, Plus } from 'lucide-react';

const ProfileHeader = ({ executive }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {/* 
        This is the exact UI layout from the reference image:
        - Flush image at the top
        - Clean typography below
        - Inline stats and pill button at the bottom
      */}
      <div className="premium-card flex flex-col relative bg-[#0D0D0D]">
        
        {/* Top Image Section - Flush to edges like the reference */}
        <div className="relative w-full h-[350px] md:h-[420px] overflow-hidden rounded-t-[32px]">
          <img 
            src={executive.image} 
            alt={executive.name} 
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient to ensure the transition to the dark card is not too harsh */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
        </div>

        {/* Content Section */}
        <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 relative z-20">
          
          {/* Name & Verification (Left Aligned) */}
          <div className="flex items-center gap-2.5 mb-1">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              {executive.name}
            </h1>
            <BadgeCheck className="w-7 h-7 text-clover-accent fill-[#0D0D0D]" />
          </div>
          
          {/* Description */}
          <p className="text-[#888888] text-[15px] md:text-[17px] leading-relaxed max-w-[90%] mb-10">
            <span className="text-white/90">{executive.role}</span> who focuses on scaling businesses with premium digital solutions & usability.
          </p>

          {/* Bottom Stats Row */}
          <div className="flex items-center justify-between w-full">
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#888888]" />
                <span className="text-white font-semibold font-heading text-lg">{executive.stats.clients}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#888888]" />
                <span className="text-white font-semibold font-heading text-lg">{executive.stats.deals}</span>
              </div>
            </div>

            <a 
              href={`https://wa.me/${executive.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all active:scale-95 flex items-center gap-1.5 shadow-xl"
            >
              Connect <Plus className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
