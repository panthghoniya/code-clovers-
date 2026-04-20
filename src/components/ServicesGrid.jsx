import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const themes = {
  blue: { bg: 'bg-[#E6F4FF]', tag: 'bg-[#CDE8FE]' },
  orange: { bg: 'bg-[#FFEADA]', tag: 'bg-[#FFD8B8]' },
  purple: { bg: 'bg-[#EBE2F9]', tag: 'bg-[#D9C8F4]' },
  green: { bg: 'bg-[#E5F9ED]', tag: 'bg-[#CCEFDB]' }
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesGrid = ({ services }) => {
  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 pl-2"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Expertise</h2>
        <p className="text-muted-foreground text-sm md:text-base">Premium services for modern brands.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
      >
        {services.map((service) => {
          const theme = themes[service.theme] || themes.blue;
          
          return (
            <motion.div 
              key={service.id}
              variants={item}
              className="premium-card p-2 md:p-2.5 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Colored Block area matching the image */}
              <div className={`${theme.bg} rounded-[24px] p-6 md:p-8 flex-grow flex flex-col transition-colors duration-300`}>
                <h3 className="text-2xl md:text-[26px] font-heading font-bold text-[#111111] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#444444] text-sm md:text-[15px] font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Tags row */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`${theme.tag} text-[#222222] text-[11px] md:text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bottom "Explore" row matching image structure */}
              <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4">
                <span className="text-foreground font-heading font-bold text-lg">
                  Explore
                </span>
                <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
