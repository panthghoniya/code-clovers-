import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mb-12 lg:mb-20">
      
      {/* Header Section matching reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pl-2 pr-4 md:pr-0">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Our Reviews
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight"
          >
            What Our <span className="text-muted-foreground font-medium">Clients</span> Say
          </motion.h2>
        </div>

        {/* Navigation Arrows */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex gap-3 pb-1"
        >
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-muted hover:bg-foreground/5 border border-border flex items-center justify-center transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 text-foreground group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-muted hover:bg-foreground/5 border border-border flex items-center justify-center transition-colors group"
          >
            <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-5 snap-x snap-mandatory"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-[320px] md:w-[380px] premium-card p-6 md:p-8 flex flex-col shrink-0 min-h-[400px] hover:-translate-y-1 snap-start"
          >
            
            {/* Card Top Row: Avatar & Company Badge */}
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-muted border border-border shrink-0">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="px-4 py-2 rounded-full bg-muted border border-border flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-[11px] md:text-xs font-semibold text-foreground/90 uppercase tracking-wide">
                  {testimonial.companyName}
                </span>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-border text-5xl font-heading leading-none mb-4">“</div>
            
            {/* Testimonial Feedback */}
            <p className="text-foreground/90 text-[17px] md:text-[19px] font-heading font-medium leading-[1.6] mb-10 flex-grow">
              {testimonial.feedback}
            </p>
            
            {/* Footer: Name, Role, Location */}
            <div className="pl-4 border-l-[3px] border-border">
              <h4 className="text-foreground font-semibold text-sm md:text-base tracking-tight mb-1">
                {testimonial.name}
              </h4>
              <p className="text-muted-foreground text-[11px] md:text-xs font-medium">
                {testimonial.role}, {testimonial.companyName}
              </p>
              <p className="text-muted-foreground/70 text-[10px] md:text-[11px] mt-1">
                {testimonial.location}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default Testimonials;
