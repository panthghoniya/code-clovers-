import { motion } from 'framer-motion';

const PortfolioSlider = ({ portfolio }) => {
  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 pl-2"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1.5">Featured Work</h2>
        <p className="text-[#888888] text-sm md:text-base">Selected projects driving real results.</p>
      </motion.div>

      <div className="w-full overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-5 w-max">
          {portfolio.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-[280px] md:w-[340px] premium-card shrink-0 group hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-[#0D0D0D]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-xl rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-[#0D0D0D]">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                {project.result && (
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-clover-accent" />
                    <p className="text-xs font-semibold text-[#888888] uppercase tracking-wider">{project.result}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
