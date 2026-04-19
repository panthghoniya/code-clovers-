import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  ShoppingCart, 
  Pen, 
  Palette, 
  Video, 
  Share2,
  Code
} from 'lucide-react';

const iconMap = {
  Code2,
  TerminalSquare: Terminal, // Fallback for old name
  ShoppingCart,
  PenTool: Pen, // Fallback for old name
  Palette,
  Video,
  Share2
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
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1.5">Expertise</h2>
        <p className="text-[#888888] text-sm md:text-base">Premium services for modern brands.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:gap-5"
      >
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Code;
          return (
            <motion.div 
              key={service.id}
              variants={item}
              className="premium-card p-6 md:p-8 flex flex-col items-start cursor-pointer group hover:bg-[#111] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-clover-primary/10 transition-colors duration-300">
                <IconComponent className="w-6 h-6 text-white group-hover:text-clover-accent transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
