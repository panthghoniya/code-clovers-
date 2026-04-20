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
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1.5">Featured Work</h2>
        <p className="text-muted-foreground text-sm md:text-base">Selected projects driving real results.</p>
      </motion.div>

      <div className="w-full overflow-x-auto no-scrollbar pb-8 -mx-3 px-3 sm:-mx-5 sm:px-5">
        <div className="flex gap-4 w-max">
          {portfolio.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-[min(80vw,300px)] sm:w-[300px] md:w-[380px] h-[360px] sm:h-[400px] md:h-[480px] rounded-[28px] overflow-hidden relative shrink-0 group cursor-pointer shadow-lg"
            >
              {/* Full Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              
              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 z-20 overflow-hidden rounded-full">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                
                {project.result && (
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-8 h-px bg-clover-accent" />
                    <p className="text-[11px] md:text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {project.result}
                    </p>
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
