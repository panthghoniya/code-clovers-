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
      <div className="premium-card flex flex-col relative">
        
        {/* Top Image Section - Flush to edges */}
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] overflow-hidden rounded-t-[32px]">
          <img 
            src={executive.image} 
            alt={executive.name} 
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient to ensure the transition to the dark card is not too harsh */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--card)] to-transparent" />
        </div>

        {/* Content Section */}
        <div className="px-4 pb-5 pt-2 sm:px-6 md:px-8 md:pb-8 relative z-20">
          
          {/* Name & Verification (Left Aligned) */}
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
              {executive.name}
            </h1>
            <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-clover-accent fill-[var(--card)] shrink-0" />
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-[15px] md:text-[17px] leading-relaxed max-w-full mb-6 md:mb-10">
            <span className="text-foreground/90 font-medium">{executive.role}</span> — scaling businesses with premium digital solutions.
          </p>

          {/* Bottom Stats Row */}
          <div className="flex items-center justify-between w-full gap-3 flex-wrap">
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <span className="text-foreground font-semibold font-heading text-base sm:text-lg">{executive.stats.clients}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <span className="text-foreground font-semibold font-heading text-base sm:text-lg">{executive.stats.deals}</span>
              </div>
            </div>

            <a 
              href={`https://wa.me/${executive.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-all active:scale-95 flex items-center gap-1.5 shadow-xl"
            >
              Connect <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
