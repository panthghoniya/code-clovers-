import { motion } from 'framer-motion';

const StatsSection = ({ stats }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="neumorphic-card rounded-[20px] p-5 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 shadow-neumorphic-inner pointer-events-none rounded-[20px]" />

        <div className="flex flex-col items-center w-1/3">
          <span className="text-xl md:text-2xl font-heading font-bold text-white mb-0.5 tracking-tight">{stats.clients}</span>
          <span className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-medium">Clients</span>
        </div>
        
        <div className="w-px h-8 bg-white/10" />
        
        <div className="flex flex-col items-center w-1/3">
          <span className="text-xl md:text-2xl font-heading font-bold text-white mb-0.5 tracking-tight">{stats.deals}</span>
          <span className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-medium">Deals</span>
        </div>
        
        <div className="w-px h-8 bg-white/10" />

        <div className="flex flex-col items-center w-1/3">
          <span className="text-xl md:text-2xl font-heading font-bold text-white mb-0.5 tracking-tight">{stats.experience}</span>
          <span className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-medium">Exp.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
