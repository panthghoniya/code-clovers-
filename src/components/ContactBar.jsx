import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactBar = ({ contact }) => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:pb-6 pointer-events-none"
    >
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="premium-card p-2 md:p-3 flex items-center justify-between gap-2 md:gap-3 bg-[#0D0D0D]/90 backdrop-blur-2xl shadow-2xl border-white/10">
          
          <a 
            href={`tel:${contact.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl hover:bg-white/5 group transition-all"
          >
            <Phone className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
            <span className="text-[11px] md:text-sm font-semibold text-[#888888] group-hover:text-white transition-colors uppercase tracking-widest">Call</span>
          </a>

          <a 
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-clover-primary hover:bg-[#0A7A40] active:scale-95 group overflow-hidden relative shadow-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white relative z-10" />
            <span className="text-[11px] md:text-sm font-bold text-white relative z-10 uppercase tracking-widest">WhatsApp</span>
          </a>

          <a 
            href={`mailto:${contact.email}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl hover:bg-white/5 group transition-all"
          >
            <Mail className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
            <span className="text-[11px] md:text-sm font-semibold text-[#888888] group-hover:text-white transition-colors uppercase tracking-widest">Email</span>
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default ContactBar;
