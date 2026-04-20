import { motion } from 'framer-motion';

const CompanyIntro = ({ company }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="premium-card relative p-8 md:p-10 overflow-hidden group">
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-clover-primary/10 blur-[80px] rounded-full group-hover:bg-clover-primary/20 transition-colors duration-700 pointer-events-none" />
        
        <div className="relative z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-border mb-6">
            <div className="w-2 h-2 rounded-full bg-clover-accent shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">About {company.name}</span>
          </div>
          
          {/* Main Statement */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-snug mb-6 tracking-tight">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">premium digital experiences</span> that drive growth.
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-2xl mb-8">
            {company.introduction}
          </p>

          {/* Value Props / Bento Footer */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-border">
            <div className="flex-1">
              <div className="text-muted-foreground text-[11px] font-bold uppercase tracking-wider mb-2">Our Value</div>
              <div className="text-foreground/90 text-sm font-medium leading-relaxed">{company.valueProposition}</div>
            </div>
            
            <div className="w-px bg-border hidden sm:block" />
            
            <div className="flex-1">
              <div className="text-muted-foreground text-[11px] font-bold uppercase tracking-wider mb-2">Trust & Scale</div>
              <div className="text-foreground/90 text-sm font-medium leading-relaxed">{company.trustStatement}</div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyIntro;
